import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';

import {getTasks} from '../../redux/actions';
import {formatDate} from '../helperFunctions';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bulkOpen: false,
      bulkPosition:null
    };
  }

  componentWillMount(){
    this.props.getTasks();
  }
  render() {
    console.log(this.context.router);
    if(this.props.loadingData){
      return (<div>Loading...</div>);
    }
    return (
      <div>
        <div style={{borderBottom: 'thick solid black',borderWidth:1,marginBottom:10}}>
          <h2>Projekt 1</h2>
        </div>

        <Popover
          open={this.state.bulkOpen}
          anchorEl={this.state.bulkPosition}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={()=>{this.setState({bulkOpen:false})}}>
          <Menu>
            <MenuItem primaryText="Refresh all tasks" onClick={()=>{this.setState({bulkOpen:false});this.props.getTasks();}} />
          </Menu>
        </Popover>

        <RaisedButton label="DELETE" labelColor='#FFF' backgroundColor='red' />
        <RaisedButton label="BULK ACTIONS" labelColor='#FFF' backgroundColor='#81C0FA' style={{marginLeft:15}} onClick={(event)=>{event.preventDefault();this.setState({bulkOpen: true,bulkPosition: event.currentTarget});}} />
        <RaisedButton style={{float:'right'}} label="EDIT PROJECT" labelColor='#FFF' backgroundColor='green' onClick={()=>this.props.history.push('/project/edit/1')} />
        {
          this.props.loadingData?<div>Loading...</div>:
        <Table multiSelectable={true}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Requested by</TableHeaderColumn>
              <TableHeaderColumn>Company</TableHeaderColumn>
              <TableHeaderColumn>Assigned to</TableHeaderColumn>
              <TableHeaderColumn>Created at</TableHeaderColumn>
              <TableHeaderColumn>Deadline</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              this.props.tasks.map((task)=>(
            <TableRow key={task.id}>
              <TableRowColumn><Link style={{textDecoration:'none',fontSize:15}} to={ `/task/edit/${task.id}` }>{task.title}</Link></TableRowColumn>
              <TableRowColumn>{task.requestedBy.name}</TableRowColumn>
              <TableRowColumn>{task.company.title}</TableRowColumn>
              <TableRowColumn>{task.assignedTo.name}</TableRowColumn>
              <TableRowColumn>{formatDate(task.createdAt)}</TableRowColumn>
              <TableRowColumn>{formatDate(task.deadline)}</TableRowColumn>
              <TableRowColumn>{task.status.title}</TableRowColumn>
            </TableRow>)
              )
            }
          </TableBody>
        </Table>
      }
      </div>
    );
  }
}

const mapStateToProps = ({taskData,login}) => {
  const {loadingData,tasks} = taskData;
  const {ACL} = login;
  return {tasks,loadingData};
};

export default connect(mapStateToProps,{getTasks})(TaskList);
