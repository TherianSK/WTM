import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {setHistory} from '../../../redux/actions';

class TaskList extends Component {
  componentWillMount(){
    this.props.setHistory(this.props.history);
  }
  render(){
    return (
      <div>
        <div style={{borderBottom: 'thick solid black',borderWidth:1,marginBottom:10}}>
          <h2>{this.props.taskListTitle}</h2>
        </div>
        <Table fixedHeader={false} multiSelectable={true} style={{width: "auto",tableLayout: 'auto'}}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Deadline</TableHeaderColumn>
              <TableHeaderColumn>Course</TableHeaderColumn>
              <TableHeaderColumn>Difficulty</TableHeaderColumn>
              <TableHeaderColumn>Work time</TableHeaderColumn>
              <TableHeaderColumn>Points</TableHeaderColumn>
              <TableHeaderColumn>Starts at</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} >
            {
              this.props.homeworks.map((homework)=>(
                <TableRow key={homework.id}>
                  <TableRowColumn><Link style={{textDecoration:'none',fontSize:15}} to={ `/homework/p/${homework.id}` }>{homework.title}</Link></TableRowColumn>
                  <TableRowColumn style={{overflowX:'none'}}>{homework.deadline}</TableRowColumn>
                  <TableRowColumn>{homework.course.title}</TableRowColumn>
                  <TableRowColumn>{homework.expectedDifficulty}</TableRowColumn>
                  <TableRowColumn>{homework.expectedWorkTime}</TableRowColumn>
                  <TableRowColumn>{homework.points}</TableRowColumn>
                  <TableRowColumn>{homework.startsAt}</TableRowColumn>
                </TableRow>)
              )
            }
          </TableBody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = ({ data }) => {
  const { homeworks,taskListTitle } = data;
  return { homeworks,taskListTitle };
};

export default connect(mapStateToProps, {setHistory})(TaskList);
