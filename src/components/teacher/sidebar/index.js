import React, { Component } from "react";

import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import { connect } from "react-redux";
import IconButton from "material-ui/IconButton";
import LogOut from "material-ui/svg-icons/action/power-settings-new";
import { white } from "material-ui/styles/colors";

import { graphql } from 'react-apollo';
import { openDrawer, closeDrawer, logoutUser } from "../../../redux/actions";
import SidebarContent from "./sidebarLoader";
import {courses} from './query';

class Sidebar extends Component {
  render() {
    const withCourses = graphql(courses, {
      options:{
        variables:{
          userId:this.props.user.id,
        },
      },
      props: ({ data: { loading, allCourses, error, refetch, subscribeToMore } }) => ({
        loading,
        courses:allCourses,
        error,
        refetch,
        subscribeToMore,
      }),
    });
    let Sidebar = withCourses(SidebarContent);
    return (
      <div className="App">
        <AppBar
          title="Student-teacher bridge"
          style={{
            paddingLeft: this.props.opened ? 276 : 20,
            backgroundColor: "#3F51B5"
          }}
          iconElementRight={
            <span>
            <IconButton>
              <LogOut color={white} onClick={this.props.logoutUser} />
            </IconButton>
            </span>
          }
          onLeftIconButtonTouchTap={
            this.props.opened ? this.props.closeDrawer : this.props.openDrawer
          }
        />
        <Drawer open={this.props.opened} docked={true}>
          <Sidebar />
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = ({ drawer, user }) => {
  const { opened } = drawer;
  return { opened , user:user.user};
};

export default connect(mapStateToProps, {openDrawer,closeDrawer,logoutUser})(Sidebar);
