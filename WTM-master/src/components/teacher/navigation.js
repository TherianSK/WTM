import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Sidebar from "./sidebar";
import HomeworkList from "./homeworkList";
import HomeworkEdit from "./homeworkEdit";
import HomeworkAdd from "./homeworkAdd";
import ManageStudents from "./manageStudents";
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
              <Route path="/homework/e/:id" component={HomeworkEdit} />
              <Route path="/homework/add/:id" component={HomeworkAdd} />
              <Route path="/course/:id" component={ManageStudents} />
              <Route path="/" component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ drawer }) => {
  const { opened } = drawer;
  return { opened };
};

export default connect(mapStateToProps, {})(Navigation);
