import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import {loginUser} from '../../redux/actions';
import Navigation from '../navigation';
class Login extends Component {
  render() {
    if(this.props.authenticated){
      return (
        <Navigation/>
      );
    }
    if(this.props.loading){
      return (<div>Loading...</div>);
    }
    return (
      <FlatButton label="Login" primary={true} onClick={()=>this.props.loginUser('admin','admin')} />
    );
  }
}

const mapStateToProps = ({ login }) => {
  const { authenticated,loading } = login;
  return {authenticated, loading};
};


export default connect(mapStateToProps, {loginUser})(Login);
