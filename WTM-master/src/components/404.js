import React, { Component } from "react";
import {setHistory} from '../redux/actions';
import { connect } from "react-redux";

class NotFound extends Component {
  componentWillMount(){
    this.props.setHistory(this.props.history);
  }

    render() {
      return (
        <div>
          Page not found
        </div>
      );
    }
  }

  const mapStateToProps = () => {
    return {};
  };


  export default connect(mapStateToProps, {setHistory})(NotFound);
