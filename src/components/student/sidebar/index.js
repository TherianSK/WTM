import React, { Component } from "react";

import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import { connect } from "react-redux";
import IconButton from "material-ui/IconButton";
import LogOut from "material-ui/svg-icons/action/power-settings-new";
import Menu from "material-ui/svg-icons/navigation/menu";
import { white } from "material-ui/styles/colors";

import { openDrawer, closeDrawer,logoutUser } from "../../../redux/actions";
import SidebarContent from "./sidebar";


class Sidebar extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
          title={this.props.navTitle}
          style={{
            backgroundColor: "#3F51B5"
          }}
          iconElementRight={
            <span>
              <IconButton tooltip={this.props.isMobile?null:"Log out"} tooltipStyles={{fontSize:20}}>
                <LogOut color={white} onClick={this.props.logoutUser} />
              </IconButton>
            </span>
          }
          iconElementLeft={
            <span style={{display:this.props.isMobile?"block":"none"}}>
              <IconButton>
                <Menu color={white} />
              </IconButton>
            </span>
          }

          onLeftIconButtonTouchTap={
            this.props.opened ? this.props.closeDrawer : this.props.openDrawer
          }

          />
        <Drawer open={this.props.opened} docked={true} style={{position: "fixed",...(this.props.isMobile?{width:"100%"}:{})}}>
          <SidebarContent />
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = ({ drawer,data }) => {
  const { opened } = drawer;
  const { navTitle,isMobile } = data;
  return { opened, navTitle,isMobile };
};

export default connect(mapStateToProps, {openDrawer,closeDrawer,logoutUser})(Sidebar);
