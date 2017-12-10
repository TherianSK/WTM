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
            <RaisedButton label="Delete" style={{marginLeft:15}} labelColor="#FFF" backgroundColor='red' onClick={()=>this.setState({deleteOpen:true})} />
          </div>
        }
        <Dialog
          title="Delete homework"
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
              <TableHeaderColumn style={{color: 'black', fontWeight: 'bold'}}>Course</TableHeaderColumn>
              <TableHeaderColumn style={{color: 'black', fontWeight: 'bold'}}>Difficulty</TableHeaderColumn>
              <TableHeaderColumn style={{color: 'black', fontWeight: 'bold'}}>Work time</TableHeaderColumn>
              <TableHeaderColumn style={{color: 'black', fontWeight: 'bold'}}>Points</TableHeaderColumn>
              <TableHeaderColumn style={{color: 'black', fontWeight: 'bold'}}>Starts at</TableHeaderColumn>
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

export default withApollo(connect(mapStateToProps, {setHistory,setTaskListID})(TaskList));
