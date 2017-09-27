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

import {getStatuses,startLoading, deleteStatus} from '../../../redux/actions';

class Statuses extends Component {
  constructor(props){
    super(props);
    this.state={
      deleteOpen:false,
      status:null,
    }
  }
  componentWillMount(){
    this.props.startLoading();
    this.props.getStatuses();
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
          <h2>Statuses</h2>
        </div>
        <Dialog
          title="Deleting status"
          actions={[<FlatButton
            label="Cancel"
            primary={true}
            onClick={()=>this.setState({deleteOpen:false})}
          />,
          <RaisedButton
            label="Confirm"
            onClick={()=>{this.props.deleteStatus(this.state.status.id);this.setState({deleteOpen:false})}}
            primary={true}
          />
          ]}
          modal={false}
          open={this.state.deleteOpen}
          onRequestClose={()=>this.setState({deleteOpen:false})}
        >
          {"Are you sure you want to delete status with name "+(this.state.status?this.state.status.title:'')+' ?'}
        </Dialog>
        <div>
            <RaisedButton
              style={{ marginLeft: 24 }}
              label="Add"
              onClick={()=>this.props.history.push('/settings/statuses/add')}
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
              <TableHeaderColumn>Status name</TableHeaderColumn>
              <TableHeaderColumn>Order</TableHeaderColumn>
              <TableHeaderColumn>Color</TableHeaderColumn>
              <TableHeaderColumn>Actions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
          { this.props.statuses.map((status)=>
            <TableRow key={status.id}>
              <TableRowColumn>{status.id}</TableRowColumn>
              <TableRowColumn>{status.title}</TableRowColumn>
              <TableRowColumn>{status.order}</TableRowColumn>
              <TableRowColumn style={{backgroundColor:status.color,color:'white',textAlign:'center'}}>{status.color}</TableRowColumn>
              <TableRowColumn>
                <RaisedButton
                label="Edit"
                primary={true}
                onClick={()=>this.props.history.push('/settings/statuses/edit/'+status.id)} />

                <RaisedButton
                  label="Delete"
                  secondary={true}
                  onClick={()=>this.setState({deleteOpen:true,status:status})}
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
  const {loadingData,statuses} = taskData;
  return {statuses,loadingData};
};

export default connect(mapStateToProps,{getStatuses,startLoading,deleteStatus})(Statuses);
