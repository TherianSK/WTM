import React, { Component } from "react";
import { connect } from "react-redux";
import {getSMTP,startLoading} from '../../../redux/actions';
import SmtpEdit from './smtpEdit';

class HOCSmtpEdit extends Component {

  componentWillMount(){
    this.props.startLoading();
    this.props.getSMTP(parseInt(this.props.match.params.id));
  }
  render() {
    if(this.props.loadingData||!this.props.smtp){
      return (<div>Loading...</div>);
    }
    return (
      <SmtpEdit history={this.props.history} smtp={this.props.smtp} id={parseInt(this.props.match.params.id)}/>
    );
  }
}
const mapStateToProps = ({taskData}) => {
  const {loadingData,smtp} = taskData;
  return {loadingData,smtp};
};

export default connect(mapStateToProps,{getSMTP,startLoading})(HOCSmtpEdit);
