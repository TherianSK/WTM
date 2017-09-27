import React, { Component } from "react";
import { connect } from "react-redux";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";

import {editRole} from '../../../redux/actions';
import {processInteger} from '../../helperFunctions';

class RoleEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_active: this.props.role.is_active?true:false,
      title:this.props.role.title?this.props.role.title: "",
      description:this.props.role.description?this.props.role.description: "",
      order:this.props.role.order?this.props.role.order.toString(): "1",
      edit_project:this.props.role.ACL.edit_project?this.props.role.ACL.edit_project: false,
      create_task:this.props.role.ACL.create_task?this.props.role.ACL.create_task: false,
      resolve_task:this.props.role.ACL.resolve_task?this.props.role.ACL.resolve_task: false,
      delete_task:this.props.role.ACL.delete_task?this.props.role.ACL.delete_task: false,
      view_internal_note:this.props.role.ACL.view_internal_note?this.props.role.ACL.view_internal_note: false,
      view_all_tasks:this.props.role.ACL.view_all_tasks?this.props.role.ACL.view_all_tasks: false,
      view_own_tasks:this.props.role.ACL.view_own_tasks?this.props.role.ACL.view_own_tasks: false,
      view_tasks_from_users_company:this.props.role.ACL.view_tasks_from_users_company?this.props.role.ACL.view_tasks_from_users_company: false
    };
  }

  submit(){
    let role={
        is_active:this.state.is_active,
        title:this.state.title,
        description:this.state.description,
        order:parseInt(this.state.order),
        ACL: {
          edit_project:this.state.edit_project,
          create_task:this.state.create_task,
          resolve_task:this.state.resolve_task,
          delete_task:this.state.delete_task,
          view_internal_note:this.state.view_internal_note,
          view_all_tasks:this.state.view_all_tasks,
          view_own_tasks:this.state.view_own_tasks,
          view_tasks_from_users_company:this.state.view_tasks_from_users_company
        }
      };
    this.props.editRole(role,this.props.id);
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
          <h2>Add user role</h2>
        </div>
        <Checkbox label="Active" checked={this.state.is_active} onCheck={()=>this.setState({is_active:!this.state.is_active})} />
        <TextField
          hintText=""
          floatingLabelText="Role name"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({title:value})}
          value={this.state.title}
        />
        <TextField
          hintText=""
          floatingLabelText="Role description"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({description:value})}
          value={this.state.description}
        />
        <TextField
          hintText=""
          floatingLabelText="Order/Importance"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>{let result = processInteger(value);this.setState({order:(result?result:this.state.order)})}}
          value={this.state.order}
        />
        <Checkbox label="Edit project" checked={this.state.edit_project} onCheck={()=>this.setState({edit_project:!this.state.edit_project})} />
        <Checkbox label="Create task" checked={this.state.create_task} onCheck={()=>this.setState({create_task:!this.state.create_task})} />
        <Checkbox label="Resolve task" checked={this.state.resolve_task} onCheck={()=>this.setState({resolve_task:!this.state.resolve_task})} />
        <Checkbox label="Delete task" checked={this.state.delete_task} onCheck={()=>this.setState({delete_task:!this.state.delete_task})} />
        <Checkbox label="View internal notes" checked={this.state.view_internal_note} onCheck={()=>this.setState({view_internal_note:!this.state.view_internal_note})} />
        <Checkbox label="View all tasks" checked={this.state.view_all_tasks} onCheck={()=>this.setState({view_all_tasks:!this.state.view_all_tasks})} />
        <Checkbox label="View own tasks" checked={this.state.view_own_tasks} onCheck={()=>this.setState({view_own_tasks:!this.state.view_own_tasks})} />
        <Checkbox label="View tasks from users company" checked={this.state.view_tasks_from_users_company} onCheck={()=>this.setState({view_tasks_from_users_company:!this.state.view_tasks_from_users_company})} />
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

export default connect(mapStateToProps, {editRole})(RoleEdit);
