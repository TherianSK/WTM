import React, { Component } from "react";
import { connect } from "react-redux";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import {editIMAP} from '../../../redux/actions';
import {processInteger} from '../../helperFunctions';

class IMAPEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_active:this.props.imap.is_active ? true : false,
      host:this.props.imap.host ? this.props.imap.host : "",
      port:this.props.imap.port ? this.props.imap.port.toString() : "",
      name:this.props.imap.name ? this.props.imap.name : "",
      password:this.props.imap.password ? this.props.imap.password : "",
      ssl:this.props.imap.ssl ? this.props.imap.ssl : false,
      inbox_email:this.props.imap.inbox_email ? this.props.imap.inbox_email : "",
      move_email:this.props.imap.move_email ? this.props.imap.move_email : "",
      ignore_certificate:this.props.imap.ignore_certificate ? this.props.imap.ignore_certificate : false,
      project: this.props.imap.project?this.props.projects[this.props.projects.findIndex((project)=>project.id==this.props.imap.project.id)]:this.props.projects[0],
    };
  }
  submit(){
    let imap=Object.assign({},this.state,{port:parseInt(this.state.port),project:(this.state.project?{id:this.state.project.id,title:this.state.project.title}:null)});
    this.props.editIMAP(imap,this.props.id);
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
          <h2>Add imap</h2>
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
        <TextField
        hintText=""
        floatingLabelText="Inbox e-mail"
        floatingLabelFixed={true}
        fullWidth={true}
        onChange={(event,value)=>this.setState({inbox_email:value})}
        value={this.state.inbox_email}
        />
        <TextField
        hintText=""
        floatingLabelText="Move e-mail"
        floatingLabelFixed={true}
        fullWidth={true}
        onChange={(event,value)=>this.setState({move_email:value})}
        value={this.state.move_email}
        />

        <Checkbox label="Ignore certificate" checked={this.state.ignore_certificate} onCheck={()=>this.setState({ignore_certificate:!this.state.ignore_certificate})} />
        <SelectField
          floatingLabelText="Company"
          value={this.state.project}
          fullWidth={true}
          onChange={(event, index, value)=>this.setState({project:value})}
        >
        {
          this.props.projects.map((project)=>
          <MenuItem key={project.id} value={project} primaryText={project.title} />
        )
        }
        </SelectField>
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

export default connect(mapStateToProps, {editIMAP})(IMAPEdit);
