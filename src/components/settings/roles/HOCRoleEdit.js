import React, { Component } from "react";
import { connect } from "react-redux";
import {getRole,startLoading} from '../../../redux/actions';
import RoleEdit from './roleEdit';

class HOCRoleEdit extends Component {

  componentWillMount(){
    this.props.startLoading();
    this.props.getRole(parseInt(this.props.match.params.id));
  }
  render() {
    if(this.props.loadingData||!this.props.user_role){
      return (<div>Loading...</div>);
    }
    return (
      <RoleEdit history={this.props.history} role={this.props.user_role} id={parseInt(this.props.match.params.id)}/>
    );
  }
}
const mapStateToProps = ({taskData}) => {
  const {loadingData,user_role} = taskData;
  return {loadingData,user_role};
};

export default connect(mapStateToProps,{getRole,startLoading})(HOCRoleEdit);
