import React, { Component } from "react";
import MenuItem from "material-ui/MenuItem";
import ProjectIcon from "material-ui/svg-icons/file/folder-open";
import { List } from "material-ui/List";

class Sidebar extends Component {

  render() {
    if (this.props.loadingCourses) {
      return <div>Loading...</div>;
    }

    return (
      <div
        style={{
          justifyContent: "flex-start",
          textAlign: "left"
        }}
      >
        <List>
        {this.props.courses.map(course => (
          <MenuItem key={course.id} leftIcon={<ProjectIcon />}>
            {course.title}
          </MenuItem>
        ))}
        </List>
      </div>
    );
  }
}

export default Sidebar;
