import React, { Component } from "react";
import { connect } from "react-redux";
import {getIMAP,startLoading, getProjects} from '../../../redux/actions';
import ImapEdit from './imapEdit';

class HOCImapEdit extends Component {

  componentWillMount(){
    this.props.startLoading();
    this.props.getProjects();
    this.props.getIMAP(parseInt(this.props.match.params.id));
  }
  render() {
    console.log(this.props);
    if(this.props.loadingProjects||this.props.loadingData||!this.props.imap||!this.props.projects){
      return (<div>Loading...</div>);
    }
    return (
      <ImapEdit history={this.props.history} projects={this.props.projects} imap={this.props.imap} id={parseInt(this.props.match.params.id)}/>
    );
  }
}
const mapStateToProps = ({taskData}) => {
  const {loadingData,imap,loadingProjects,projects} = taskData;
  return {loadingData,imap,loadingProjects,projects};
};

export default connect(mapStateToProps,{getIMAP,startLoading,getProjects})(HOCImapEdit);
