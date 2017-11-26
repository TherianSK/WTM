import React, { Component } from "react";
import MenuItem from "material-ui/MenuItem";
import ProjectIcon from "material-ui/svg-icons/file/folder-open";
import { List } from "material-ui/List";
import { connect } from "react-redux";
import {setHomeworks} from '../../../redux/actions';

class Sidebar extends Component {

  render() {
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
              this.props.setHomeworks(homeworks,'Deadlines')
              this.props.history.push('/');
            }}>
            Deadlines
          </MenuItem>
          {this.props.courses.map(course => (
            <MenuItem key={course.id} leftIcon={<ProjectIcon />} onClick={()=>{
                let homeworks=[];
                this.props.courses.map((course)=>homeworks=homeworks.concat(course.homeworks));
                homeworks=homeworks.filter((homework)=>homework.course.id==course.id);
                homeworks.sort((item1,item2)=>item1.deadline>item2.deadline);
                this.props.setHomeworks(homeworks,course.title);
                this.props.history.push('/');
              }
            }>
            {course.title}
          </MenuItem>
        ))}
      </List>
    </div>
  );
}
}

const mapStateToProps = ({ data }) => {
  const { courses,history } = data;
  return { courses,history };
};

export default connect(mapStateToProps, {setHomeworks})(Sidebar);
