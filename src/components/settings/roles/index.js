import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import Popover from "material-ui/Popover";
import RaisedButton from "material-ui/RaisedButton";
import SearchIcon from "material-ui/svg-icons/action/search";
import TextField from "material-ui/TextField";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import {getUserRoles,startLoading, deleteRole} from '../../../redux/actions';

class UserRoles extends Component {
  constructor(props){
    super(props);
    this.state={
      deleteOpen:false,
      role:null,
    }
  }
  componentWillMount(){
    this.props.startLoading();
    this.props.getUserRoles();
  }
  render() {
    if(this.props.loadingData){
      return (<div>Loading...</div>);
    }
    return (
      <div>
        <div
          style={{
            borderBottom: "thick solid black",
            borderWidth: 1,
            marginBottom: 10
          }}
        >
          <h2>User Roles</h2>
        </div>
        <Dialog
          title="Deleting role"
          actions={[<FlatButton
            label="Cancel"
            primary={true}
            onClick={()=>this.setState({deleteOpen:false})}
          />,
          <RaisedButton
            label="Confirm"
            onClick={()=>{this.props.deleteRole(this.state.role.id);this.setState({deleteOpen:false})}}
            primary={true}
          />
          ]}
          modal={false}
          open={this.state.deleteOpen}
          onRequestClose={()=>this.setState({deleteOpen:false})}
        >
          {"Are you sure you want to delete user role with name "+(this.state.role?this.state.role.title:'')+' ?'}
        </Dialog>
        <div>
            <RaisedButton
              style={{ marginLeft: 24 }}
              label="Add"
              onClick={()=>this.props.history.push('/settings/roles/add')}
              primary={true}
            />
          <SearchIcon
            style={{
              verticalAlign: "middle",
              padding: 24,
              display: "inline-flex"
            }}
          />
          <TextField hintText="search text" />
          <RaisedButton
            style={{ marginLeft: 24 }}
            label="Search"
            primary={true}
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Importance</TableHeaderColumn>
              <TableHeaderColumn>Role title</TableHeaderColumn>
              <TableHeaderColumn>Active</TableHeaderColumn>
              <TableHeaderColumn>Actions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
          { this.props.user_roles.map((role)=>
            <TableRow key={role.id}>
              <TableRowColumn>{role.id}</TableRowColumn>
              <TableRowColumn>{role.order}</TableRowColumn>
              <TableRowColumn>{role.title}</TableRowColumn>
              <TableRowColumn>{role.is_active?'Yes':'No'}</TableRowColumn>
              <TableRowColumn>
                <RaisedButton
                label="Edit"
                primary={true}
                onClick={()=>this.props.history.push('/settings/roles/edit/'+role.id)} />

                <RaisedButton
                  label="Delete"
                  secondary={true}
                  onClick={()=>this.setState({deleteOpen:true,role:role})}
                  style={{ marginLeft: 5 }} />
              </TableRowColumn>
            </TableRow>)
            }
          </TableBody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = ({taskData}) => {
  const {loadingData,user_roles} = taskData;
  return {user_roles,loadingData};
};

export default connect(mapStateToProps,{getUserRoles,startLoading,deleteRole})(UserRoles);
