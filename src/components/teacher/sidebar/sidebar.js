import React, { Component } from "react";
import { withApollo } from 'react-apollo';
import { connect } from "react-redux";

import MenuItem from "material-ui/MenuItem";
import ProjectIcon from "material-ui/svg-icons/file/folder-open";
import { List } from "material-ui/List";
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import TextField from "material-ui/TextField";
import {subscription} from "./query";
import {setHomeworks,addNewCourse} from '../../../redux/actions';

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state={
      courseName:'',
      addCourseLoc:null,
    }
  }
  componentWillMount(){
    this.props.subscribeToMore({
      document: subscription,
      updateQuery: () => {
        this.props.refetch();
        return;
      },
    });

  }
  render() {
    if(this.props.loading){
      return(
        <div>
          Loading...
        </div>
      );
    };
    return (
      <div
        style={{
          justifyContent: "flex-start",
          textAlign: "left"
        }}
        >
        <List>
          <MenuItem key="deadline" leftIcon={<ProjectIcon />} onClick={()=>{
              let homeworks=[];
              this.props.courses.map((course)=>homeworks=homeworks.concat(course.homeworks));
              homeworks.sort((item1,item2)=>item1.deadline>item2.deadline);
              this.props.setHomeworks(homeworks,'Deadlines',null);
              this.props.history.push('/');
            }}>
            Deadlines
          </MenuItem>
          {this.props.courses.map(course => (
            <MenuItem key={course.id} leftIcon={<ProjectIcon />} onClick={()=>{
                let homeworks=[];
                this.props.courses.map((course)=>homeworks=homeworks.concat(course.homeworks));
                homeworks=homeworks.filter((homework)=>homework.course.id===course.id);
                homeworks.sort((item1,item2)=>item1.deadline>item2.deadline);
                this.props.setHomeworks(homeworks,course.title,course.id);
                this.props.history.push('/');
              }
            }>
            {course.title}
          </MenuItem>
        ))}
        <FlatButton
          label="Add new course"
          primary
          fullWidth={true}
          onClick={(event)=>this.setState({addCourseLoc:event.currentTarget})} />
      </List>
      <Popover
        open={this.state.addCourseLoc?true:false}
        anchorEl={this.state.addCourseLoc}
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        onRequestClose={()=>this.setState({addCourseLoc:null,courseName:''})}
        >
        <div>
          <TextField
            hintText="Course name"
            floatingLabelText="Course name"
            floatingLabelFixed={false}
            fullWidth
            onChange={(event,value)=>this.setState({courseName:value})}
            value={this.state.courseName}
            />
          <FlatButton
            label="Add"
            primary
            fullWidth
            onClick={(event)=>{this.props.addNewCourse(this.props.client,this.props.user.id,this.state.courseName);this.setState({addCourseLoc:null,courseName:''});}} />
        </div>
      </Popover>
    </div>
  );
}
}


const mapStateToProps = ({ user, data }) => {
  const { history } = data;
  return {user:user.user,history};
};


export default withApollo(connect(mapStateToProps, {addNewCourse,setHomeworks})(Sidebar));
