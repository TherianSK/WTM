import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Sidebar from "./sidebar";
import TaskList from "./taskList/taskList";
import TaskEdit from "./taskEdit";
import Filter from "./filter";
import ProjectEdit from "./projectEdit";

import SettingsList from "./settings/settingsList";
import Companies from "./settings/companies";
import CompanyAdd from "./settings/companies/companyAdd";
import CompanyEdit from "./settings/companies/companyEdit";
import Imaps from "./settings/imaps";
import ImapsAdd from "./settings/imaps/HOCImapAdd";
import ImapsEdit from "./settings/imaps/HOCImapEdit";
import Roles from "./settings/roles";
import RoleAdd from "./settings/roles/roleAdd";
import RoleEdit from "./settings/roles/HOCRoleEdit";
import Smtps from "./settings/smtps";
import SmtpAdd from "./settings/smtps/smtpAdd";
import SmtpEdit from "./settings/smtps/HOCSmtpEdit";
import Statuses from "./settings/statuses";
import StatusAdd from "./settings/statuses/statusAdd";
import StatusEdit from "./settings/statuses/HOCStatusEdit";
import TaskAttributes from "./settings/taskAttributes";
import Units from "./settings/units";
import UnitAdd from "./settings/units/unitAdd";
import UnitEdit from "./settings/units/HOCUnitEdit";
import Users from "./settings/users";
import UserAdd from "./settings/users/userAdd";
import UserEdit from "./settings/users/userEdit";

class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>
          <Sidebar />
          <div style={{ paddingLeft: this.props.opened ? 256 : 0 }}>
            <Switch>
              <Route exact path="/" component={TaskList} />
              <Route exact path="/filter" component={Filter} />
              <Route path="/task/edit" component={TaskEdit} />
              <Route path="/project/edit/:id" component={ProjectEdit} />

              <Route exact path="/settings" component={SettingsList} />
              <Route exact path="/settings/companies" component={Companies} />
              <Route exact path="/settings/companies/add" component={CompanyAdd} />
              <Route path="/settings/companies/edit/:id" component={CompanyEdit} />
              <Route exact path="/settings/imaps" component={Imaps} />
              <Route exact path="/settings/imaps/add" component={ImapsAdd} />
              <Route path="/settings/imaps/edit/:id" component={ImapsEdit} />
              <Route exact path="/settings/roles" component={Roles} />
              <Route exact path="/settings/roles/add" component={RoleAdd} />
              <Route path="/settings/roles/edit/:id" component={RoleEdit} />
              <Route exact path="/settings/smtps" component={Smtps} />
              <Route exact path="/settings/smtps/add" component={SmtpAdd} />
              <Route path="/settings/smtps/edit/:id" component={SmtpEdit} />
              <Route exact path="/settings/statuses" component={Statuses} />
              <Route exact path="/settings/statuses/add" component={StatusAdd} />
              <Route path="/settings/statuses/edit/:id" component={StatusEdit} />
              <Route exact path="/settings/task-attributes" component={TaskAttributes} />
              <Route exact path="/settings/units" component={Units} />
              <Route exact path="/settings/units/add" component={UnitAdd} />
              <Route path="/settings/units/edit/:id" component={UnitEdit} />
              <Route exact path="/settings/users" component={Users} />
              <Route exact path="/settings/users/add" component={UserAdd} />
              <Route path="/settings/users/edit/:id" component={UserEdit} />
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
