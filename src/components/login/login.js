import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { withApollo } from 'react-apollo';

import {loginUser} from '../../redux/actions';
//import Navigation from '../navigation';


class Login extends Component {
  render() {
    if(this.props.token){
      return (
        <div>DONE...</div>
      );
      /*
      return (
        <Navigation/>
      );*/
    }
    if(this.props.loading){
      return (<div>Loading...</div>);
    }
    return (
      <FlatButton label="Login" primary={true} onClick={()=>this.props.loginUser('test@test.sk','testPass',this.props.client)} />
    );
  }
}

const mapStateToProps = ({ user }) => {
  const { token, loading } = user;
  return {token, loading};
};


export default withApollo(connect(mapStateToProps, {loginUser})(Login));
