import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import DatePicker from "material-ui/DatePicker";
import Divider from "material-ui/Divider";
import { Grid, Row, Col } from "react-flexbox-grid";
import SaveIcon from "material-ui/svg-icons/content/save";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import ChangeStatus from "./changeStatus";
import RaisedButton from "material-ui/RaisedButton";
import Popover from "material-ui/Popover";
import Menu from "material-ui/Menu";

class TaskAttributes extends Component {
  state = {
    value: 1
  };
  handleChange = (event, index, value) => this.setState({ value });
  /*
  tag, attachement
  */

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <ChangeStatus />

        <div
          style={{
            position: "relative",
            display: "inline-block",
            width: "90%"
          }}
        >
          <SaveIcon
            style={{
              position: "relative",
              left: 0,
              top: 50,
              width: 20,
              height: 20
            }}
          />
        </div>

        <SelectField
          floatingLabelText="Requester"
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth={true}
          style={{ marginLeft: 30 }}
        >
          <MenuItem value={1} primaryText="Matej" />
        </SelectField>
        <SelectField
          floatingLabelText="Company"
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth={true}
          style={{ marginLeft: 30 }}
        >
          <MenuItem value={1} primaryText="Lansystems" />
        </SelectField>

        <Table>
          <TableBody displayRowCheckbox={false}>
            <TableRow style={{border:"none"}}>
              <TableRowColumn>
                <TextField
                  fullWidth={true}
                  hintText="time"
                  floatingLabelText="Start time"
                  floatingLabelFixed={true}
                />
              </TableRowColumn>
              <TableRowColumn style={{border:"none"}}>
                <TextField
                  fullWidth={true}
                  hintText="date"
                  floatingLabelText="date"
                  floatingLabelFixed={true}
                />
              </TableRowColumn>
            </TableRow>
            <TableRow style={{border:"none"}}>
              <TableRowColumn>
                <TextField
                  fullWidth={true}
                  hintText="time"
                  floatingLabelText="Deadline time"
                  floatingLabelFixed={true}
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  fullWidth={true}
                  hintText="date"
                  floatingLabelText="date"
                  floatingLabelFixed={true}
                />
              </TableRowColumn>
            </TableRow>
            <TableRow style={{border:"none"}}>
              <TableRowColumn>
                <TextField
                  fullWidth={true}
                  hintText="time"
                  floatingLabelText="Closed at"
                  floatingLabelFixed={true}
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  fullWidth={true}
                  hintText="date"
                  floatingLabelText="date"
                  floatingLabelFixed={true}
                />
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
        <TextField
          floatingLabelText="Tag"
          multiLine={true}
          fullWidth={true}
          floatingLabelFixed={true}
          rows={2}
        />
        <TextField
          floatingLabelText="Attachement"
          multiLine={true}
          fullWidth={true}
          floatingLabelFixed={true}
          rows={2}
        />
      </div>
    );
  }
}

export default TaskAttributes;
