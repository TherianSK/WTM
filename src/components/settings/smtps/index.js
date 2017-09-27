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

import {getSMTPs,startLoading, deleteSMTP} from '../../../redux/actions';

class SMTPs extends Component {
  constructor(props){
    super(props);
    this.state={
      deleteOpen:false,
      smtp:null,
    }
  }
  componentWillMount(){
    this.props.startLoading();
    this.props.getSMTPs();
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
          <h2>SMTPs</h2>
        </div>
        <Dialog
          title="Deleting smtp"
          actions={[<FlatButton
            label="Cancel"
            primary={true}
            onClick={()=>this.setState({deleteOpen:false})}
          />,
          <RaisedButton
            label="Confirm"
            onClick={()=>{this.props.deleteSMTP(this.state.smtp.id);this.setState({deleteOpen:false})}}
            primary={true}
          />
          ]}
          modal={false}
          open={this.state.deleteOpen}
          onRequestClose={()=>this.setState({deleteOpen:false})}
        >
          {"Are you sure you want to delete SMTP for email  "+(this.state.smtp?this.state.smtp.email:'')+' ?'}
        </Dialog>
        <div>
            <RaisedButton
              style={{ marginLeft: 24 }}
              label="Add"
              onClick={()=>this.props.history.push('/settings/smtps/add')}
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
              <TableHeaderColumn>Host</TableHeaderColumn>
              <TableHeaderColumn>Port</TableHeaderColumn>
              <TableHeaderColumn>E-mail</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>SSL</TableHeaderColumn>
              <TableHeaderColumn>TLS</TableHeaderColumn>
              <TableHeaderColumn>Actions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
          { this.props.smtps.map((smtp)=>
            <TableRow key={smtp.id}>
              <TableRowColumn>{smtp.id}</TableRowColumn>
              <TableRowColumn>{smtp.host}</TableRowColumn>
              <TableRowColumn>{smtp.port}</TableRowColumn>
              <TableRowColumn>{smtp.email}</TableRowColumn>
              <TableRowColumn>{smtp.name}</TableRowColumn>
              <TableRowColumn>{smtp.ssl?'Yes':'No'}</TableRowColumn>
              <TableRowColumn>{smtp.tls?'Yes':'No'}</TableRowColumn>
              <TableRowColumn>
                <RaisedButton
                label="Edit"
                primary={true}
                onClick={()=>this.props.history.push('/settings/smtps/edit/'+smtp.id)} />

                <RaisedButton
                  label="Delete"
                  secondary={true}
                  onClick={()=>this.setState({deleteOpen:true,smtp:smtp})}
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
  const {loadingData,smtps} = taskData;
  return {smtps,loadingData};
};

export default connect(mapStateToProps,{getSMTPs,startLoading,deleteSMTP})(SMTPs);
