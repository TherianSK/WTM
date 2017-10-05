import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withApollo } from 'react-apollo';
import TextField from "material-ui/TextField";
import FlatButton from 'material-ui/FlatButton';

import {loginUser} from '../../redux/actions';
import Navigation from '../navigation';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'test@test.sk',
      password:'testPass'
    };
  }

  render() {
    if(this.props.token){
      return (
        <Navigation/>
      );
    }
    if(this.props.loading){
      return (<div>Loading...</div>);
    }
    return (
      <div style={{
        border: "thick solid black",
        borderWidth: 1,
        borderRadius: 10,
        padding:10,
        width:250
      }}>
        <TextField
          hintText=""
          floatingLabelText="E-mail"
          floatingLabelFixed={true}
          onChange={(event,value)=>this.setState({email:value})}
          value={this.state.email}
        />

        <TextField
          hintText=""
          floatingLabelText="Password"
          floatingLabelFixed={true}
          type="password"
          onChange={(event,value)=>this.setState({password:value})}
          value={this.state.password}
        />

        <FlatButton label="Login" primary={true} onClick={()=>this.props.loginUser(this.state.email,this.state.password,this.props.client)} />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  const { token, loading } = user;
  return {token, loading};
};


export default withApollo(connect(mapStateToProps, {loginUser})(Login));
