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

import {getUsers,startLoading, openEditingOfUser, deleteUser,openAddingOfUser} from '../../../redux/actions';

class Users extends Component {
  constructor(props){
    super(props);
    this.state={
      deleteOpen:false,
      user:null,
    }
  }
  componentWillMount(){
    this.props.startLoading();
    this.props.getUsers();
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
          <h2>Users</h2>
        </div>
        <Dialog
          title="Deleting user"
          actions={[<FlatButton
            label="Cancel"
            primary={true}
            onClick={()=>this.setState({deleteOpen:false})}
          />,
          <RaisedButton
            label="Confirm"
            onClick={()=>{this.props.deleteUser(this.state.user.id);this.setState({deleteOpen:false})}}
            primary={true}
          />
          ]}
          modal={false}
          open={this.state.deleteOpen}
          onRequestClose={()=>this.setState({deleteOpen:false})}
        >
          {"Are you sure you want to delete user with name "+(this.state.user?this.state.user.name:'')+' ?'}
        </Dialog>
        <div>
            <RaisedButton
              style={{ marginLeft: 24 }}
              label="Add"
              onClick={()=>this.props.openAddingOfUser(this.props.history)}
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
              <TableHeaderColumn>Username</TableHeaderColumn>
              <TableHeaderColumn>Full name</TableHeaderColumn>
              <TableHeaderColumn>E-mail</TableHeaderColumn>
              <TableHeaderColumn>Company</TableHeaderColumn>
              <TableHeaderColumn>Active</TableHeaderColumn>
              <TableHeaderColumn>Actions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
          { this.props.users.map((user)=>
            <TableRow key={user.id}>
              <TableRowColumn>{user.id}</TableRowColumn>
              <TableRowColumn>{user.username}</TableRowColumn>
              <TableRowColumn>{user.name}</TableRowColumn>
              <TableRowColumn>{user.email}</TableRowColumn>
              <TableRowColumn>{user.company.title}</TableRowColumn>
              <TableRowColumn>{(user.is_active?'Yes':'No')}</TableRowColumn>
              <TableRowColumn>
                <RaisedButton
                label="Edit"
                primary={true}
                onClick={()=>this.props.openEditingOfUser(user.id,this.props.history)} />

                <RaisedButton
                  label="Delete"
                  secondary={true}
                  onClick={()=>this.setState({deleteOpen:true,user:user})}
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
  const {loadingData,users} = taskData;
  return {users,loadingData};
};

export default connect(mapStateToProps,{getUsers,startLoading,openEditingOfUser,deleteUser,openAddingOfUser})(Users);
