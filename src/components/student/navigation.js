import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Sidebar from "./sidebar";
import HomeworkList from "./homeworkList";
import HomeworkPreview from "./homeworkPreview";
import NotFound from "../404";

class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>
          <Sidebar />
          <div style={{ paddingLeft: this.props.opened ? 256 : 0 }}>
            <Switch>
              <Route exact path="/" component={HomeworkList} />
              <Route path="/homework/p/:id" component={HomeworkPreview} />
              <Route path="/" component={NotFound} />
            </Switch>
          </div>
          <footer style={{
              backgroundColor:'#3F51B5',
              position: "fixed",
              bottom: this.props.isMobile?-500:0,
              left: 0,
              right: 0,
              height: 27
            }}>
            <div style={{float:"right",color:"white",display:'flex'}}>
              Created by BilBoHei team for WTAM course.
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ drawer, data }) => {
  const { opened } = drawer;
  const { isMobile } = data;
  return { opened, isMobile };
};

export default connect(mapStateToProps, {})(Navigation);
