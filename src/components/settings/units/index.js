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

import {getUnits,startLoading, deleteUnit} from '../../../redux/actions';

class Units extends Component {
  constructor(props){
    super(props);
    this.state={
      deleteOpen:false,
      unit:null,
    }
  }
  componentWillMount(){
    this.props.startLoading();
    this.props.getUnits();
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
          <h2>Units</h2>
        </div>
        <Dialog
          title="Deleting unit"
          actions={[<FlatButton
            label="Cancel"
            primary={true}
            onClick={()=>this.setState({deleteOpen:false})}
          />,
          <RaisedButton
            label="Confirm"
            onClick={()=>{this.props.deleteUnit(this.state.unit.id);this.setState({deleteOpen:false})}}
            primary={true}
          />
          ]}
          modal={false}
          open={this.state.deleteOpen}
          onRequestClose={()=>this.setState({deleteOpen:false})}
        >
          {"Are you sure you want to delete unit with name "+(this.state.unit?this.state.unit.title:'')+' ?'}
        </Dialog>
        <div>
            <RaisedButton
              style={{ marginLeft: 24 }}
              label="Add"
              onClick={()=>this.props.history.push('/settings/units/add')}
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
              <TableHeaderColumn>Unit name</TableHeaderColumn>
              <TableHeaderColumn>Unit shortcut</TableHeaderColumn>
              <TableHeaderColumn>Active</TableHeaderColumn>
              <TableHeaderColumn>Actions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
          { this.props.units.map((unit)=>
            <TableRow key={unit.id}>
              <TableRowColumn>{unit.id}</TableRowColumn>
              <TableRowColumn>{unit.title}</TableRowColumn>
              <TableRowColumn>{unit.shortcut}</TableRowColumn>
              <TableRowColumn>{unit.is_active?'Yes':'No'}</TableRowColumn>
              <TableRowColumn>
                <RaisedButton
                label="Edit"
                primary={true}
                onClick={()=>this.props.history.push('/settings/units/edit/'+unit.id)} />

                <RaisedButton
                  label="Delete"
                  secondary={true}
                  onClick={()=>this.setState({deleteOpen:true,unit:unit})}
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
  const {loadingData,units} = taskData;
  return {units,loadingData};
};

export default connect(mapStateToProps,{getUnits,startLoading,deleteUnit})(Units);
