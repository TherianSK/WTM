import React, { Component } from "react";
import { connect } from "react-redux";
import {getUnit,startLoading} from '../../../redux/actions';
import UnitEdit from './unitEdit';

class HOCUnitEdit extends Component {

  componentWillMount(){
    this.props.startLoading();
    this.props.getUnit(parseInt(this.props.match.params.id));
  }
  render() {
    if(this.props.loadingData||!this.props.unit){
      return (<div>Loading...</div>);
    }
    return (
      <UnitEdit history={this.props.history} unit={this.props.unit} id={parseInt(this.props.match.params.id)}/>
    );
  }
}
const mapStateToProps = ({taskData}) => {
  const {loadingData,unit} = taskData;
  return {loadingData,unit};
};

export default connect(mapStateToProps,{getUnit,startLoading})(HOCUnitEdit);
