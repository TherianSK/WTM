import React, { Component } from "react";

import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import { connect } from "react-redux";
import IconButton from "material-ui/IconButton";
import LogOut from "material-ui/svg-icons/action/power-settings-new";
import { white } from "material-ui/styles/colors";

import { openDrawer, closeDrawer,logoutUser } from "../../../redux/actions";
import SidebarContent from "./sidebar";


class Sidebar extends Component {
  render() {
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
          <SidebarContent />
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = ({ drawer }) => {
  const { opened } = drawer;
  return { opened };
};

export default connect(mapStateToProps, {openDrawer,closeDrawer,logoutUser})(Sidebar);
