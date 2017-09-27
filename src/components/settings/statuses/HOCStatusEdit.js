import React, { Component } from "react";
import { connect } from "react-redux";
import {getStatus,startLoading} from '../../../redux/actions';
import StatusEdit from './statusEdit';

class HOCStatusEdit extends Component {

  componentWillMount(){
    this.props.startLoading();
    this.props.getStatus(parseInt(this.props.match.params.id));
  }
  render() {
    if(this.props.loadingData||!this.props.status){
      return (<div>Loading...</div>);
    }
    return (
      <StatusEdit history={this.props.history} status={this.props.status} id={parseInt(this.props.match.params.id)}/>
    );
  }
}
const mapStateToProps = ({taskData}) => {
  const {loadingData,status} = taskData;
  return {loadingData,status};
};

export default connect(mapStateToProps,{getStatus,startLoading})(HOCStatusEdit);
