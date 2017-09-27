import React, { Component } from "react";
import MenuItem from "material-ui/MenuItem";
import { connect } from "react-redux";
import Badge from "material-ui/Badge";
import { getProjects } from "../../redux/actions";
import { Link } from "react-router-dom";
import ProjectIcon from "material-ui/svg-icons/file/folder-open";
import AddIcon from "material-ui/svg-icons/content/add";
import { List, ListItem } from "material-ui/List";

class Sidebar extends Component {
  componentWillMount() {
    this.props.getProjects();
  }

  render() {
    if (this.props.loadingProjects) {
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
          <Link to="/filter">
            <ListItem primaryText="Filter" leftIcon={<AddIcon />} />
          </Link>
          <Link to="/task/edit">
            <ListItem primaryText="Task" leftIcon={<AddIcon />} />
          </Link>
        </List>
        {this.props.projects.map(project => (
          <MenuItem key={project.id} leftIcon={<ProjectIcon />}>
            {project.title}
            <Badge
              style={{ top: 15, float: "right" }}
              badgeContent={project.numberOfTasks}
              secondary={true}
            />
          </MenuItem>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ taskData, login }) => {
  const { projects, loadingProjects } = taskData;
  return { projects, loadingProjects };
};

export default connect(mapStateToProps, { getProjects })(Sidebar);
