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

class MaterialTable extends Component {
  render() {
    return (
      <div style={{marginTop:10}}>
        <Card>
          <CardHeader
            subtitle="Material"
          />
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Quantity</TableHeaderColumn>
                <TableHeaderColumn>Unit</TableHeaderColumn>
                <TableHeaderColumn>Price</TableHeaderColumn>
                <TableHeaderColumn>Price total</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn>Keyboard Genius</TableRowColumn>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>ks</TableRowColumn>
                <TableRowColumn>20</TableRowColumn>
                <TableRowColumn>20</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <TextField fullWidth={true} />
                </TableRowColumn>
                <TableRowColumn>
                  <TextField fullWidth={true} />
                </TableRowColumn>
                <TableRowColumn>
                  <TextField fullWidth={true} />
                </TableRowColumn>
                <TableRowColumn>
                  <TextField fullWidth={true} />
                </TableRowColumn>
                <TableRowColumn>
                  <FlatButton
                    label="Add"
                    primary={true}
                    labelStyle={{ paddingRight: 0 }}
                    fullWidth={true}
                  />
                </TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    );
  }
}

export default MaterialTable;
