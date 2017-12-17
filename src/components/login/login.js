import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withApollo } from 'react-apollo';
import TextField from "material-ui/TextField";
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import {loginUser,registerUser,isMobile,openDrawer} from '../../redux/actions';
import StudentNavigation from './../student/navigation';
import TeacherNavigation from './../teacher/navigation';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'test@test.sk',
      password:'testPass',
      newEmail:'',
      newPassword:'',
      registration:false,
      isTeacher:false,
    };
  }

  componentDidMount() {
    this.props.isMobile(document.body.clientWidth<=768);
    window.addEventListener("resize", ()=>{this.props.isMobile(document.body.clientWidth<=768);this.props.openDrawer()});
  }

  componentWillUnmount() {
    window.removeEventListener("resize", ()=>{this.props.isMobile(document.body.clientWidth<=768);this.props.openDrawer()});
  }

  render() {
    if(this.props.token && this.props.user){
      if(this.props.user.isTeacher){
        return (
          <TeacherNavigation/>
        );
      }
      return (
        <StudentNavigation/>
      );
    }
    return (
      <div style={{flex:1}}>
        <div style={{margin:"auto",width:220}}>
        <FlatButton
          label={"Login"}
          primary={true}
          style={{marginTop:20}}
          disabled={!this.state.registration}
          onClick={()=>this.setState({registration:false})} />
        or
        <FlatButton
          label={"Register"}
          primary={true}
          style={{marginTop:20}}
          disabled={this.state.registration}
          onClick={()=>this.setState({registration:true})} />
      </div>
        <div style={{
            border: "thick solid black",
            borderWidth: 1,
            borderRadius: 10,
            padding:10,
            width:250,
            display:this.state.registration?'none':'block',
            margin:"auto"
          }}>
          <h3>Login to MUGA</h3>
          <div>
            <TextField
              hintText="E-mail"
              floatingLabelText="E-mail"
              floatingLabelFixed={false}
              onChange={(event,value)=>this.setState({email:value})}
              value={this.state.email}
              />
          </div>
          <div style={{marginTop:20}}>
            <TextField
              hintText=""
              floatingLabelText="Password"
              floatingLabelFixed={false}
              type="password"
              onChange={(event,value)=>this.setState({password:value})}
              value={this.state.password}
              />
          </div>

          <RaisedButton
            label={this.props.loading?"Checking...":"Login"}
            primary={true} disabled={this.props.loading}
            style={{marginTop:20}}
            fullWidth={true}
            onClick={()=>this.props.loginUser(this.state.email,this.state.password,this.props.client)} />
          {
            !this.props.loading && this.props.error &&
            <div style={{color:'red'}}>Your login information is incorrect!</div>
          }

        </div>
        <div style={{
            border: "thick solid black",
            borderWidth: 1,
            borderRadius: 10,
            padding:10,
            width:250,
            display:!this.state.registration?'none':'block',
            margin:"auto"
          }}>
          <h3>Registration</h3>

          <TextField
            hintText="E-mail"
            style={{color:'green'}}
            floatingLabelText="E-mail"
            floatingLabelFixed={false}
            disabled={this.props.registered}
            onChange={(event,value)=>this.setState({newEmail:value})}
            value={this.state.newEmail}
            />
          <TextField
            hintText=""
            floatingLabelText="Password"
            floatingLabelFixed={false}
            type="password"
            disabled={this.props.registered}
            onChange={(event,value)=>this.setState({newPassword:value})}
            value={this.state.newPassword}
            />
          <Checkbox
            label="Are you a teacher?"
            disabled={this.props.registered}
            checked={this.state.isTeacher}
            onClick={()=>this.setState({isTeacher:!this.state.isTeacher})}
            />
          (if not you will become a student)
          <RaisedButton
            label={this.props.registered?"Registered, you can log in now":"Register"}
            primary={true}
            disabled={this.props.registered}
            style={{marginTop:10}}
            fullWidth={true}
            onClick={()=>{this.props.registerUser(this.state.newEmail,this.state.newPassword,this.state.isTeacher,this.props.client)}} />
          {
            this.props.regError &&
            <div style={{color:'red'}}>This account already exists!</div>
          }
        </div>
        <footer style={{
            backgroundColor:'#3F51B5',
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: 27
          }}>
          <div style={{float:"right",color:"white",display:'flex'}}>
            Created by BilBoHei team for WTAM course.
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  const { token, loading,error, registered, regError } = user;
  return {token, loading,user:user.user,error,registered, regError};
};


export default withApollo(connect(mapStateToProps, {loginUser,registerUser,openDrawer,isMobile})(Login));
