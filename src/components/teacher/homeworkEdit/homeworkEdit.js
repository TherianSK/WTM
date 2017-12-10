import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Paper from 'material-ui/Paper';
import Slider from 'material-ui/Slider';
import {editHomework,deleteHomework} from './query';
import { connect } from 'react-redux';
import { withApollo } from 'react-apollo';
import {setTaskListID} from '../../../redux/actions';
class HomeworkEdit extends Component {
  constructor(props){
    super(props);
    this.props.refetch();
    this.state={
      deadline:this.props.homework.deadline?this.props.homework.deadline.substring(0,this.props.homework.deadline.length-2):null,
      description:this.props.homework.description,
      expectedDifficulty:this.props.homework.expectedDifficulty,
      expectedWorkTime: this.props.homework.expectedWorkTime,
      points:this.props.homework.points,
      startsAt:this.props.homework.startsAt?this.props.homework.startsAt.substring(0,this.props.homework.startsAt.length-2):null,
      title:this.props.homework.title,
      comments:this.props.homework.comments,
    }
  }
  componentWillMount(){
    this.props.setTaskListID(this.props.homework.course.id);

  }

  saveEdit(){
    this.props.client.mutate({
      mutation: editHomework,
      variables: {
        deadline:this.state.deadline,
        description:this.state.description,
        expectedDifficulty:this.state.expectedDifficulty,
        expectedWorkTime:this.state.expectedWorkTime?parseFloat(this.state.expectedWorkTime):null,
        points:this.state.points?parseInt(this.state.points,10):null,
        startsAt:this.state.startsAt,
        title:this.state.title,
        id:this.props.id,
        deleteOpen:false,
      }
    }).then((resp)=>{
      this.props.history.goBack();
    }).catch((error)=>console.log(error));
  }

  deleteHomework(){
    this.props.client.mutate({
      mutation: deleteHomework,
      variables: { id:this.props.id},
    });
    this.props.history.goBack();
  }

  render() {
    let averageDif=0;
    let averageRat=0;
    let averageTime=0;
    this.props.homework.comments.map((comment)=>{averageDif+=comment.difficulty;averageRat+=comment.rating;averageTime+=comment.timeSpend;return false;})
    averageDif/=this.props.homework.comments.length;
    averageRat/=this.props.homework.comments.length;
    averageTime/=this.props.homework.comments.length;

    return (
      <div>
        <div>
          <Dialog
            title="Delete homework"
            actions={[<FlatButton label="Cancel" primary={true} onClick={()=>this.setState({deleteOpen:false})}/>,<RaisedButton label="Delete" labelColor="#FFF" backgroundColor='red' onClick={this.deleteHomework.bind(this)} />]}
            modal={true}
            open={this.state.deleteOpen}
            >
            Are you sure you want to delete this homework with name {this.props.homework.title}?
          </Dialog>
        </div>
        <h1>Homework edit - {this.props.homework.title}</h1>
        <RaisedButton label="Save" primary={true} onClick={this.saveEdit.bind(this)} />
        <RaisedButton label="Go back" secondary={true} onClick={()=>this.props.history.goBack()} />
        <RaisedButton label="Delete" labelColor="#FFF" backgroundColor='red' onClick={()=>this.setState({deleteOpen:true})} />
        <Paper style={{margin:25,padding:10}} zDepth={2}>
          <TextField
            fullWidth={true}
            floatingLabelFixed={true}
            floatingLabelText="Title"
            value={this.state.title}
            onChange={(event,value)=>this.setState({title:value})}
            />
          <TextField
            fullWidth={true}
            floatingLabelFixed={true}
            multiLine={true}
            floatingLabelText="Description"
            value={this.state.description}
            onChange={(event,value)=>this.setState({description:value})}
            />

          <TextField
            fullWidth={true}
            floatingLabelFixed={true}
            type="datetime-local"
            floatingLabelText="Deadline"
            value={this.state.deadline}
            onChange={(event,value)=>this.setState({deadline:value})}
            />

          <TextField
            fullWidth={true}
            floatingLabelFixed={true}
            type="datetime-local"
            floatingLabelText="Starts at"
            value={this.state.startsAt}
            onChange={(event,value)=>this.setState({startsAt:value})}
            />

          <h4>Expected homework difficulty: {this.state.expectedDifficulty}!</h4>
          <Slider
            min={0}
            max={10}
            step={1}
            value={this.state.expectedDifficulty}
            style={{width:250}}
            onChange={(event,value)=>this.setState({expectedDifficulty:value})}
            />
          <TextField
            fullWidth={true}
            floatingLabelFixed={true}
            value={this.state.expectedWorkTime}
            floatingLabelText="Predicted time spend (in hours)"
            type="number"
            onChange={(event,value)=>this.setState({expectedWorkTime:value})}
            />
          <TextField
            fullWidth={true}
            floatingLabelFixed={true}
            value={this.state.points}
            floatingLabelText="Maximum points"
            type="number"
            onChange={(event,value)=>this.setState({points:value})}
            />

        </Paper>
        <Paper style={{margin:25,padding:10}} zDepth={2}>
          <h2>Comments and ratings</h2>
          <div>Average difficulty: {averageDif}</div>
          <div>Average rating: {averageRat}</div>
          <div>Average timeSpend: {averageTime}</div>
          <div>
            <h3>Each rating</h3>
            {this.state.comments.map((comment)=>
              <Paper style={{margin:5,padding:5}} zDepth={1}>
                <div style={{display:'flex'}}>
                  <div>
                    <div>Difficulty: {comment.difficulty}</div>
                    <div>Rating: {comment.rating}</div>
                    <div>Time spend: {comment.timeSpend}</div>
                  </div>
                  <Paper style={{marginLeft:5,padding:5,flex:1}} zDepth={1}>
                    Comment: {comment.body}
                  </Paper>
                </div>
              </Paper>
            )}

          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {user:user.user};
};


export default withApollo(connect(mapStateToProps, {setTaskListID})(HomeworkEdit));
