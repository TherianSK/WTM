import React, { Component } from 'react';
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

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bulkOpen: false,
      bulkPosition:null
    };
  }

  render() {
    if(this.props.loadingHomeworks){
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
            <MenuItem primaryText="Refresh all" />
          </Menu>
        </Popover>

        <RaisedButton label="DELETE" labelColor='#FFF' backgroundColor='red' />
        <RaisedButton label="BULK ACTIONS" labelColor='#FFF' backgroundColor='#81C0FA' style={{marginLeft:15}} onClick={(event)=>{event.preventDefault();this.setState({bulkOpen: true,bulkPosition: event.currentTarget});}} />
        <RaisedButton style={{float:'right'}} label="EDIT STUFF" labelColor='#FFF' backgroundColor='green' />
        {
          this.props.loadingData?<div>Loading...</div>:
        <Table multiSelectable={true}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              this.props.homeworks.map((homework)=>(
            <TableRow key={homework.id}>
              <TableRowColumn><Link style={{textDecoration:'none',fontSize:15}} to={ `/homework/s/${homework.id}` }>{homework.title}</Link></TableRowColumn>
              <TableRowColumn>{homework.description}</TableRowColumn>
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

export default TaskList;
