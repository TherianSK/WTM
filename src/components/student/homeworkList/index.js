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
      <div style={{marginTop:20}}>
        <Table fixedHeader={false} multiSelectable={true} style={{width: "auto",tableLayout: 'auto'}}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn style={{color: 'black', fontWeight: 'bold'}}>Title</TableHeaderColumn>
              <TableHeaderColumn style={{color: 'black', fontWeight: 'bold'}}>Deadline</TableHeaderColumn>
              {!this.props.isMobile&&<TableHeaderColumn style={{color: 'black', fontWeight: 'bold'}}>Course</TableHeaderColumn>}
              {!this.props.isMobile&&<TableHeaderColumn style={{color: 'black', fontWeight: 'bold'}}>Difficulty</TableHeaderColumn>}
              {!this.props.isMobile&&<TableHeaderColumn style={{color: 'black', fontWeight: 'bold'}}>Work time</TableHeaderColumn>}
              {!this.props.isMobile&&<TableHeaderColumn style={{color: 'black', fontWeight: 'bold'}}>Points</TableHeaderColumn>}
              {!this.props.isMobile&&<TableHeaderColumn style={{color: 'black', fontWeight: 'bold'}}>Starts at</TableHeaderColumn>}
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} >
            {
              this.props.homeworks.map((homework)=>(
                <TableRow key={homework.id}>
                  <TableRowColumn><Link style={{textDecoration:'none',fontSize:15}} to={ `/homework/p/${homework.id}` }>{homework.title}</Link></TableRowColumn>
                  <TableRowColumn style={{overflowX:'none'}}>{homework.deadline}</TableRowColumn>
                  {!this.props.isMobile&&<TableRowColumn>{homework.course.title}</TableRowColumn>}
                  {!this.props.isMobile&&<TableRowColumn>{homework.expectedDifficulty}</TableRowColumn>}
                  {!this.props.isMobile&&<TableRowColumn>{homework.expectedWorkTime}</TableRowColumn>}
                  {!this.props.isMobile&&<TableRowColumn>{homework.points}</TableRowColumn>}
                  {!this.props.isMobile&&<TableRowColumn>{homework.startsAt}</TableRowColumn>}
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
  const { homeworks,taskListTitle,isMobile } = data;
  return { homeworks,taskListTitle,isMobile };
};

export default connect(mapStateToProps, {setHistory})(TaskList);
