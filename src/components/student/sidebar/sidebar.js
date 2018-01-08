import React, { Component } from "react";
import MenuItem from "material-ui/MenuItem";
import ProjectIcon from "material-ui/svg-icons/social/school";
import AlarmIcon from "material-ui/svg-icons/device/access-alarm";
import { List } from "material-ui/List";
import { connect } from "react-redux";
import {setHomeworks,closeDrawer} from '../../../redux/actions';

class Sidebar extends Component {

  render() {
    return (
      <div style={{marginTop:70,
          justifyContent: "flex-start",
          textAlign: "left",
          width:"100%"
        }}>
        <nav>
          <MenuItem key="deadline" leftIcon={<AlarmIcon color={this.props.taskListID==null?'black':'grey'} />} style={{backgroundColor:this.props.taskListID===null?'#d3d3d3':'white'}} onClick={()=>{
              let homeworks=[];
              this.props.courses.map((course)=>homeworks=homeworks.concat(course.homeworks));
              homeworks.sort((item1,item2)=>item1.deadline>item2.deadline);
              this.props.setHomeworks(homeworks,'Deadlines',null);
              if(this.props.isMobile){
                this.props.closeDrawer();
              }
              this.props.history.push('/');
            }}>
            Deadlines
          </MenuItem>
          {this.props.courses.map(course => (
            <MenuItem key={course.id} leftIcon={<ProjectIcon color={this.props.taskListID==course.id?'black':'grey'} />} style={{backgroundColor:this.props.taskListID===course.id?'#d3d3d3':'white'}} onClick={()=>{
                let homeworks=[];
                this.props.courses.map((course)=>homeworks=homeworks.concat(course.homeworks));
                homeworks=homeworks.filter((homework)=>homework.course.id===course.id);
                homeworks.sort((item1,item2)=>item1.deadline>item2.deadline);
                this.props.setHomeworks(homeworks,course.title,course.id);
                if(this.props.isMobile){
                  this.props.closeDrawer();
                }
                this.props.history.push('/');
              }
            }>
            {course.title}
          </MenuItem>
        ))}
      </nav>
    </div>
  );
}
}

const mapStateToProps = ({ data }) => {
  const { courses,history,taskListID,isMobile } = data;
  return { courses,history,taskListID,isMobile };
};

export default connect(mapStateToProps, {setHomeworks,closeDrawer})(Sidebar);
