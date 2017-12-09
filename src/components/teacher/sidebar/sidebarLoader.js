import React, { Component } from "react";
import Sidebar from "./sidebar";

class SidebarLoader extends Component {
  render(){
    if(this.props.loading){
      return(<div>Loading...</div>)
    }
      return(<Sidebar courses={this.props.courses} refetch={this.props.refetch} subscribeToMore={this.props.subscribeToMore} />)
  }

}

export default SidebarLoader;
