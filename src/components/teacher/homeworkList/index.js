import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import RaisedButton from 'material-ui/RaisedButton';
import {deleteCourse} from './query';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {setHistory, setTaskListID} from '../../../redux/actions';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { withApollo } from 'react-apollo';

class TaskList extends Component {
  constructor(props){
    super(props);
    this.state={
      locManage:null,
      deleteOpen:false,
    };
  }
  componentWillMount(){
    this.props.setHistory(this.props.history);
  }

  deleteCourse(){
    this.props.setTaskListID(null);
    this.props.client.mutate({
      mutation: deleteCourse,
      variables: { id:this.props.taskListID},
    });
    this.setState({deleteOpen:false});
  }

  render(){
    return (
      <div style={{marginTop:20, marginLeft:20, marginBottom:20}}>
        {
          this.props.taskListID &&
          <div>
            <Link style={{textDecoration:'none',fontSize:15}} to={ `/homework/add/${this.props.taskListID}` }>
              <RaisedButton
                style={{marginLeft:20, marginBottom:20}}
                label="Add task"
                labelColor='#FFF'
                backgroundColor='green'
                />
            </Link>
            <Link style={{textDecoration:'none',fontSize:15}} to={ `/course/${this.props.taskListID}` }>
              <RaisedButton
                style={{marginLeft:20, marginBottom:20}}
                label="Manage students"
                labelColor='#FFF'
                backgroundColor='#3366CC'
                onClick={(event)=>this.setState({locManage:event.currentTarget})} />
            </Link>
            <RaisedButton label="Delete" style={{marginLeft:20, marginBottom:20}} labelColor="#FFF" backgroundColor='red' onClick={()=>this.setState({deleteOpen:true})} />
          </div>
        }
        <Dialog
          title="Delete Course"
          actions={[<FlatButton label="Cancel" primary={true} onClick={()=>this.setState({deleteOpen:false})}/>,<RaisedButton label="Delete" labelColor="#FFF" backgroundColor='red' onClick={this.deleteCourse.bind(this)} />]}
          modal={true}
          open={this.state.deleteOpen}
          >
          Are you sure you want to delete this course with name {this.props.taskListTitle}?
        </Dialog>

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
                  <TableRowColumn><Link style={{textDecoration:'none',fontSize:15}} to={ `/homework/e/${homework.id}` }>{homework.title}</Link></TableRowColumn>
                  <TableRowColumn>{homework.deadline}</TableRowColumn>
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
  const { homeworks,taskListTitle, taskListID,isMobile } = data;
  return { homeworks,taskListTitle,taskListID,isMobile };
};

export default withApollo(connect(mapStateToProps, {setHistory,setTaskListID})(TaskList));
