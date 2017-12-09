import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import RaisedButton from 'material-ui/RaisedButton';

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
  constructor(props){
    super(props);
    this.state={
      locManage:null,
    };
  }
  componentWillMount(){
    this.props.setHistory(this.props.history);
  }
  render(){
    return (
      <div>
        <div style={{borderBottom: 'thick solid black',borderWidth:1,marginBottom:10}}>
          <h2>{this.props.taskListTitle}</h2>
        </div>
        {
          this.props.taskListID &&
          <div>
            <Link style={{textDecoration:'none',fontSize:15}} to={ `/homework/add/${this.props.taskListID}` }>
              <RaisedButton
                label="Add task"
                labelColor='#FFF'
                backgroundColor='green'
                />
            </Link>
            <Link style={{textDecoration:'none',fontSize:15}} to={ `/course/${this.props.taskListID}` }>
              <RaisedButton
                label="Manage students"
                labelColor='#FFF'
                backgroundColor='#81C0FA'
                style={{marginLeft:15}}
                onClick={(event)=>this.setState({locManage:event.currentTarget})} />
            </Link>
          </div>
        }
        <Table multiSelectable={true} style={{tableLayout: 'auto'}}>
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
                  <TableRowColumn><Link style={{textDecoration:'none',fontSize:15}} to={ `/homework/e/${homework.id}` }>{homework.title}</Link></TableRowColumn>
                  <TableRowColumn>{homework.deadline}</TableRowColumn>
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
  const { homeworks,taskListTitle, taskListID } = data;
  return { homeworks,taskListTitle,taskListID };
};

export default connect(mapStateToProps, {setHistory})(TaskList);
