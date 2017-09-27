import React, { Component } from "react";
import { connect } from "react-redux";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import {addUser,openAddingOfUser} from '../../../redux/actions';

class UserAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      company:this.props.companies[0],
      password:'',
      signature:'',
      is_active:true,
      user_role:this.props.user_roles[0],
      username:'',
      func:'',
      mobile:'',
      tel:''
    };
  }

  componentWillMount(){
    if(this.props.companies.length==0){
      this.props.history.goBack();
      this.props.openAddingOfUser(this.props.history);
    }
  }

  submit(){
    const {name,email,company,signature,is_active,user_role,username,func,mobile,tel} = this.state;
    const user = {name,email,company:{id:company.id,title:company.title},signature,is_active,user_role:{id:user_role.id},username,function:func,mobile,tel};
    const userInList = {username,name,email,is_active,company:{id:company.id,title:company.title}};
    this.props.addUser(user,userInList);
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <div
          style={{
            borderBottom: "thick solid black",
            borderWidth: 1,
            marginBottom: 10
          }}
        >
          <h2>User add</h2>
        </div>

        <Checkbox label="Active" checked={this.state.is_active} onCheck={()=>this.setState({is_active:!this.state.is_active})} />

        <TextField
          hintText=""
          floatingLabelText="Full name"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({name:value})}
          value={this.state.name}
        />
        <TextField
          hintText=""
          floatingLabelText="E-mail"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({email:value})}
          value={this.state.email}
        />
        <TextField
          hintText=""
          floatingLabelText="Password"
          floatingLabelFixed={true}
          fullWidth={true}
          type="password"
          onChange={(event,value)=>this.setState({password:value})}
          value={this.state.password}
        />
        <SelectField
          floatingLabelText="Company"
          value={this.state.company}
          fullWidth={true}
          onChange={(event, index, value)=>this.setState({company:value})}
        >
        { this.props.companies.map((company)=>
          <MenuItem key={company.id} value={company} primaryText={company.title} />
        )
        }
        </SelectField>
        <TextField
          hintText=""
          floatingLabelText="Signature"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({signature:value})}
          value={this.state.signature}
        />
        <TextField
          hintText=""
          floatingLabelText="User name"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({username:value})}
          value={this.state.username}
        />
        <SelectField
          floatingLabelText="User role"
          value={this.state.user_role}
          fullWidth={true}
          onChange={(event, index, value)=>this.setState({user_role:value})}
        >
        { this.props.user_roles.map((role)=>
          <MenuItem key={role.id} value={role} primaryText={role.title} />
        )
        }
        </SelectField>

        <TextField
          hintText=""
          floatingLabelText="Function"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({func:value})}
          value={this.state.func}
        />
        <TextField
          hintText=""
          floatingLabelText="Mobile"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({mobile:value})}
          value={this.state.mobile}
        />
        <TextField
          hintText=""
          floatingLabelText="Telephone"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({tel:value})}
          value={this.state.tel}
        />
        <div style={{marginTop:20,}}>
          <RaisedButton
            label="Cancel"
            onClick={this.props.history.goBack}
            secondary={true}
          />
          <RaisedButton
            style={{ position: "absolute", right:10}}
            label="Save"
            onClick={this.submit.bind(this)}
            primary={true}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ taskData }) => {
  const { companies, user_roles } = taskData;
  return {companies,user_roles};
};

export default connect(mapStateToProps, {addUser,openAddingOfUser})(UserAdd);
