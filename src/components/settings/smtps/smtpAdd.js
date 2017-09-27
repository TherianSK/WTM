import React, { Component } from "react";
import { connect } from "react-redux";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";

import {addSMTP} from '../../../redux/actions';
import {processInteger} from '../../helperFunctions';


class SMTPAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_active: true,
      host: "",
      port: "",
      email: "",
      name: "",
      password: "",
      ssl: false,
      tls: false
    };
  }

  submit(){
    let smtp=Object.assign({},this.state,{port:parseInt(this.state.port)});
    this.props.addSMTP(smtp);
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
          <h2>Add item unit</h2>
        </div>
        <Checkbox label="Active" checked={this.state.is_active} onCheck={()=>this.setState({is_active:!this.state.is_active})} />
        <TextField
          hintText=""
          floatingLabelText="Host"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({host:value})}
          value={this.state.host}
        />
        <TextField
          hintText=""
          floatingLabelText="Port"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>{let result = processInteger(value);this.setState({port:(result?result:this.state.order)})}}
          value={this.state.port}
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
          floatingLabelText="Name"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({name:value})}
          value={this.state.name}
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
        <Checkbox label="SSL" checked={this.state.ssl} onCheck={()=>this.setState({ssl:!this.state.ssl})} />
        <Checkbox label="TLS" checked={this.state.tls} onCheck={()=>this.setState({tls:!this.state.tls})} />

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
  return {};
};

export default connect(mapStateToProps, {addSMTP})(SMTPAdd);
