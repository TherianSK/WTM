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
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

class HomeworkPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bulkOpen: false,
      bulkPosition: null
    };
  }

  //deadline, description, expectedDifficulty, expectedWorkTime,points,startsAt,title
  //comments,difficulties,ratings,workTimes

  render() {
    if(this.props.loadingHomeworks){
      return (<div>Loading...</div>);
    }
    let x=`
    2030 Jesus Christ, holiness of
    2030 Jesus Christ, holiness of

    The holiness of Jesus Christ is seen in his divine nature and work, as he stands apart from and above the created world with divine power, authority and purity. Recognition of the holiness of Jesus Christ leads both to a realisation of sin and unworthiness and to worship and adoration.
    `
    return (
      <div>
        <h1>View homework</h1>
        <h4>Deadline</h4>
          <TextField
            fullWidth={true}
            floatingLabelFixed={true}
            value="11.8.2019"
            disabled={true}
          />
        <h4>Maximum points</h4>
          <TextField
            fullWidth={true}
            floatingLabelFixed={true}
            multiLine={true}
            value="15 points"
            disabled={true}
          />
      <h4>Title</h4>
        <TextField
          fullWidth={true}
          floatingLabelFixed={true}
          multiLine={true}
          value="Create a dictionary from following input"
          disabled={true}
        />
      <h4>Description</h4>
        <TextField
          fullWidth={true}
          floatingLabelFixed={true}
          multiLine={true}
          value={x}
          disabled={true}
        />

        <h4>Rating</h4>
          <TextField
            fullWidth={true}
            floatingLabelFixed={true}
            value="4/10"
          />

        <h4>Comment this homework</h4>
          <TextField
            fullWidth={true}
            floatingLabelFixed={true}
            multiLine={true}
          />



        <h1>ADDING TASK</h1>
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
          <Col style={{ borderRight: "1px solid grey",padding:10 }}>
          <TextField
          floatingLabelText="Title"
          fullWidth={true}
          floatingLabelFixed={true}
          />
            <TextField
              floatingLabelText="Deadline"
              fullWidth={true}
              floatingLabelFixed={true}
            />
            <TextField
              floatingLabelText="Description"
              fullWidth={true}
              floatingLabelFixed={true}
            />
            <TextField
              floatingLabelText="Expected Difficulty"
              fullWidth={true}
              floatingLabelFixed={true}
            />
            <TextField
              floatingLabelText="Expected work time"
              fullWidth={true}
              floatingLabelFixed={true}
            />
            <TextField
              floatingLabelText="Points"
              fullWidth={true}
              floatingLabelFixed={true}
            />
            <TextField
              floatingLabelText="Starts at"
              fullWidth={true}
              floatingLabelFixed={true}
            />
          </Col>
        </Row>
        <Divider style={{marginBottom:10}}/>
        <h1>ADDING/EDITTING COURSE</h1>
        <Divider style={{marginBottom:10}}/>
        <Row>
          <Col style={{ borderRight: "1px solid grey",padding:10 }}>
          <TextField
          floatingLabelText="Title"
          fullWidth={true}
          floatingLabelFixed={true}
          />
          <h3>Student requests</h3>
          <RaisedButton
            label="Add students to course"
            secondary={true}
            icon={<SaveIcon />}
            style={{ marginLeft: 5 }}
          />
          <RaisedButton
            label="Refuse students"
            secondary={true}
            icon={<CancelIcon />}
            style={{ marginLeft: 5 }}
          />

          <Table multiSelectable={true}>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>E-mail</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableRowColumn>John Smith</TableRowColumn>
                <TableRowColumn>student.Smith@uniba.sk</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Randal White</TableRowColumn>
                <TableRowColumn>student.White@uniba.sk</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Stephanie Sanders</TableRowColumn>
                <TableRowColumn>student.Sanders@uniba.sk</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Steve Brown</TableRowColumn>
                <TableRowColumn>student.Brown@uniba.sk</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Christopher Nolan</TableRowColumn>
                <TableRowColumn>student.Nolan@uniba.sk</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomeworkPreview;
