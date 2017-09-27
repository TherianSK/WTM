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
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import { List, ListItem } from "material-ui/List";
import Divider from "material-ui/Divider";
import Subheader from "material-ui/Subheader";
import Avatar from "material-ui/Avatar";
import { grey400, darkBlack, lightBlack } from "material-ui/styles/colors";

class CommentsList extends Component {
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <List>
          <ListItem
            primaryText={
              <div>
                <span>Admin</span>
                <span style={{fontStyle:"italic"}}> posted a note</span>
                <span style={{float:"right"}}> 8:00 31.5.2017</span>
              </div>
          }
            secondaryText={
              <p>
                I&apos;ll be in your neighborhood doing errands this weekend. Do
                you want to grab brunch?
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider />
        </List>
      </div>
    );
  }
}

export default CommentsList;
