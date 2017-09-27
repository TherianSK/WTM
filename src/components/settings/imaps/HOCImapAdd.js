import React, { Component } from "react";
import { connect } from "react-redux";
import {getProjects} from '../../../redux/actions';
import ImapAdd from './imapAdd';

class HOCSmtpAdd extends Component {

  componentWillMount(){
    this.props.getProjects();
  }
  render() {
    if(this.props.loadingProjects||!this.props.projects){
      return (<div>Loading...</div>);
    }
    return (
      <ImapAdd history={this.props.history} projects={this.props.projects} id={parseInt(this.props.match.params.id)}/>
    );
  }
}
const mapStateToProps = ({taskData}) => {
  const {loadingProjects,projects} = taskData;
  return {loadingProjects,projects};
};

export default connect(mapStateToProps,{getProjects})(HOCSmtpAdd);
