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

import {getIMAPs,startLoading, deleteIMAP} from '../../../redux/actions';

class IMAPs extends Component {
  constructor(props){
    super(props);
    this.state={
      deleteOpen:false,
      imap:null,
    }
  }
  componentWillMount(){
    this.props.startLoading();
    this.props.getIMAPs();
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
          <h2>IMAPs</h2>
        </div>
        <Dialog
          title="Deleting imap"
          actions={[<FlatButton
            label="Cancel"
            primary={true}
            onClick={()=>this.setState({deleteOpen:false})}
          />,
          <RaisedButton
            label="Confirm"
            onClick={()=>{this.props.deleteIMAP(this.state.imap.id);this.setState({deleteOpen:false})}}
            primary={true}
          />
          ]}
          modal={false}
          open={this.state.deleteOpen}
          onRequestClose={()=>this.setState({deleteOpen:false})}
        >
          {"Are you sure you want to delete IMAP"+(this.state.imap? " from e-mail "+this.state.imap.inbox_email+' to '+ this.state.imap.move_email:'')+' ?'}
        </Dialog>
        <div>
            <RaisedButton
              style={{ marginLeft: 24 }}
              label="Add"
              onClick={()=>this.props.history.push('/settings/imaps/add')}
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
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>SSL</TableHeaderColumn>
              <TableHeaderColumn>Inbox e-mail</TableHeaderColumn>
              <TableHeaderColumn>Move e-mail</TableHeaderColumn>
              <TableHeaderColumn>Ignore certificate</TableHeaderColumn>
              <TableHeaderColumn>Project</TableHeaderColumn>
              <TableHeaderColumn>Actions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
          { this.props.imaps.map((imap)=>
            <TableRow key={imap.id}>
              <TableRowColumn>{imap.id}</TableRowColumn>
              <TableRowColumn>{imap.host}</TableRowColumn>
              <TableRowColumn>{imap.port}</TableRowColumn>
              <TableRowColumn>{imap.name}</TableRowColumn>
              <TableRowColumn>{imap.ssl?'Yes':'No'}</TableRowColumn>
              <TableRowColumn>{imap.inbox_email}</TableRowColumn>
              <TableRowColumn>{imap.move_email}</TableRowColumn>
              <TableRowColumn>{imap.ignore_certificate?'Yes':'No'}</TableRowColumn>
              <TableRowColumn>{imap.project.title}</TableRowColumn>
              <TableRowColumn>
                <RaisedButton
                label="Edit"
                primary={true}
                onClick={()=>this.props.history.push('/settings/imaps/edit/'+imap.id)} />

                <RaisedButton
                  label="Delete"
                  secondary={true}
                  onClick={()=>this.setState({deleteOpen:true,imap:imap})}
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
  const {loadingData,imaps} = taskData;
  return {imaps,loadingData};
};

export default connect(mapStateToProps,{getIMAPs,startLoading,deleteIMAP})(IMAPs);
