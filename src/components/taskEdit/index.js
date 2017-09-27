import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
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
import DeleteIcon from "material-ui/svg-icons/action/delete";
import CancelIcon from "material-ui/svg-icons/av/not-interested";
import PrintIcon from "material-ui/svg-icons/maps/local-printshop";
import SaveIcon from "material-ui/svg-icons/content/save";
import Divider from "material-ui/Divider";
import TextField from "material-ui/TextField";
import MaterialTable from "./materialTable";
import CommentsList from "./commentsList";
import TaskAttributes from "./taskAttributes";
import CommentAdd from "./commentAdd";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

class TaskEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bulkOpen: false,
      bulkPosition: null
    };
  }

  render() {
    return (
      <div>
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          <RaisedButton
            label="CANCEL"
            secondary={true}
            icon={<CancelIcon />}
            style={{ marginLeft: 5 }}
          />
          <RaisedButton
            label="DELETE"
            secondary={true}
            icon={<DeleteIcon />}
            style={{ marginLeft: 5 }}
          />
          <RaisedButton
            label="PRINT"
            primary={true}
            icon={<PrintIcon />}
            style={{ marginLeft: 5 }}
          />
          <RaisedButton
            label="SAVE"
            primary={true}
            icon={<SaveIcon />}
            style={{ marginLeft: 5 }}
          />
        </div>
        <Divider style={{marginBottom:10}}/>
        <Row>
          <Col xs={8} style={{ borderRight: "1px solid grey",padding:10 }}>
            <TextField
              floatingLabelStyle={{fontSize:17}}
              style={{fontSize:30}}
              floatingLabelText="Task name"
              fullWidth={true}
              floatingLabelFixed={true}
            />
            <TextField
              floatingLabelText="Description"
              multiLine={true}
              fullWidth={true}
              floatingLabelFixed={true}
              rows={2}
            />
            <TextField
              floatingLabelText="Work done"
              multiLine={true}
              fullWidth={true}
              floatingLabelFixed={true}
              rows={2}
            />
            <TextField
              floatingLabelText="Work time"
              fullWidth={true}
              floatingLabelFixed={true}
            />
            <SelectField
              floatingLabelText="Project"
              value={this.state.value}
              onChange={this.handleChange}
              fullWidth={true}
              style={{ marginLeft: 30 }}
            >
              <MenuItem value={1} primaryText="Project 1 " />
            </SelectField>
            <SelectField
              floatingLabelText="Assigned to"
              value={this.state.value}
              onChange={this.handleChange}
              fullWidth={true}
              style={{ marginLeft: 30 }}
            >
              <MenuItem value={1} primaryText="Matus Karpan" />
            </SelectField>
          <MaterialTable/>
          <CommentAdd/>
          <CommentsList/>
          </Col>
          <Col xs={4}>
            <TaskAttributes/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TaskEdit;
