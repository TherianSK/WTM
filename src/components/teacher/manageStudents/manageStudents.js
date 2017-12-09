import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import { setCourseStudents } from '../../../redux/actions';
import { connect } from "react-redux";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

class ManageStudents extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedUsers:'start'
    }
  }
  setUsers(){
    let userIds = []
    if(this.state.selectedUsers==="all"){
      this.props.allUsers.map((user)=>userIds.push(user.id));
    }
    else if(this.state.selectedUsers!=='none'){
      this.state.selectedUsers.map((userIndex)=>userIds.push(this.props.allUsers[userIndex].id));
    }
    this.props.setCourseStudents(userIds,this.props.client,this.props.courseID,this.props.refetch);
    this.props.history.goBack();
  }

  render() {
    if(this.props.loading){
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div>
        <div style={{marginTop:10}}>
          <RaisedButton label="Go back" labelColor='#FFF' backgroundColor='grey' onClick={this.props.history.goBack} />
          <RaisedButton label="Save course users" labelColor='#FFF' backgroundColor='green' style={{marginLeft:10}} onClick={this.setUsers.bind(this)} />
        </div>
        <Table
          multiSelectable={true}
          style={{tableLayout: 'auto'}}
          onRowSelection={(value)=> {this.setState({selectedUsers:value});}}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>E-mail</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody deselectOnClickaway={false}>
            {
              this.props.allUsers.map((user)=>
              <TableRow id={user.id} key={user.id} selected={this.state.selectedUsers==="start"?user.courses.some((course)=>course.id===this.props.courseID ):(this.state.selectedUsers!=="none" && (this.state.selectedUsers==="all" || this.state.selectedUsers.includes(this.props.allUsers.indexOf(user))))}>
                <TableRowColumn>{user.email}</TableRowColumn>
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    </div>
  );
}
}


const mapStateToProps = ({ data, user }) => {
  return {};
};

export default withApollo(connect(mapStateToProps, {setCourseStudents})(ManageStudents));
