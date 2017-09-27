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
import { Tabs, Tab } from "material-ui/Tabs";
import TextField from "material-ui/TextField";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";

class CommentAdd extends Component {
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <Tabs>
          <Tab label="Reply">
            <div>
              <TextField multiLine={true} fullWidth={true} rows={2} />
              <div style={{ marginTop: 10, marginBottom: 10 }}>
                <RaisedButton
                  label="Attachment"
                  backgroundColor="#a4c639"
                  labelColor="#FFF"
                  style={{ marginLeft: 5 }}
                />
                <RaisedButton
                  label="Add"
                  primary={true}
                  style={{ marginLeft: 5 }}
                />
              </div>
            </div>
          </Tab>
          <Tab label="Email">
            <div>
              <TextField floatingLabelText="To:" fullWidth={true} />
              <TextField floatingLabelText="Cc:" fullWidth={true} />
              <TextField floatingLabelText="Bc:" fullWidth={true} />
              <TextField floatingLabelText="Subject" fullWidth={true} />
              <TextField multiLine={true} fullWidth={true} rows={2} />
              <RaisedButton
                label="Attachment"
                backgroundColor="#a4c639"
                labelColor="#FFF"
                style={{ marginLeft: 5 }}
              />
              <RaisedButton
                label="Add"
                primary={true}
                style={{ marginLeft: 5 }}
              />
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default CommentAdd;
