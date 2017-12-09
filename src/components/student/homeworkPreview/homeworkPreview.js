import React, { Component } from "react";
import TextField from "material-ui/TextField";
import FlatButton from 'material-ui/FlatButton';
import Slider from 'material-ui/Slider';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import {comment} from '../../../redux/actions';
import { withApollo } from 'react-apollo';

class HomeworkPreview extends Component {
  constructor(props){
    super(props);
    this.state={
      comment:'',
      score:2,
      difficulty:2,
      worktime:0,
      send:false
    }
  }

  render() {
    if(this.props.loadingHomeworks){
      return (<div>Loading...</div>);
    }
    let cantComment=this.props.homework.comments.some((comment)=>comment.user&&comment.user.id===this.props.user.id);
    return (
      <div>
        <h1>Homework preview - {this.props.homework.title}</h1>
        <h4>Course</h4>
        <TextField
          fullWidth={true}
          floatingLabelFixed={true}
          value={this.props.homework.course?this.props.homework.course.title:''}
          disabled={true}
          />

        <h4>Deadline</h4>
        <TextField
          fullWidth={true}
          floatingLabelFixed={true}
          value={this.props.homework.deadline}
          disabled={true}
          />
        {
          this.props.homework.description &&
          <div>
            <h4>Description</h4>
            <TextField
              fullWidth={true}
              floatingLabelFixed={true}
              value={this.props.homework.description}
              disabled={true}
              />
          </div>
        }
        {
          this.props.homework.expectedDifficulty &&
          <div>
            <h4>Expected Difficulty</h4>
            <TextField
              fullWidth={true}
              floatingLabelFixed={true}
              value={this.props.homework.expectedDifficulty}
              disabled={true}
              />
          </div>
        }
        {
          this.props.homework.expectedWorkTime &&
          <div>
            <h4>Expected work time</h4>
            <TextField
              fullWidth={true}
              floatingLabelFixed={true}
              value={this.props.homework.expectedWorkTime}
              disabled={true}
              />
          </div>
        }
        {
          this.props.homework.points &&
          <div>
            <h4>Maximum available points</h4>
            <TextField
              fullWidth={true}
              floatingLabelFixed={true}
              value={this.props.homework.points}
              disabled={true}
              />
          </div>
        }
        {
          this.props.homework.startsAt &&
          <div>
            <h4>Homework is opened since</h4>
            <TextField
              fullWidth={true}
              floatingLabelFixed={true}
              value={this.props.homework.startsAt}
              disabled={true}
              />
          </div>
        }
        {
          !cantComment&&!this.state.send&&
          <Paper style={{margin:25,padding:10}} zDepth={2}>
            <h2>Comment and rate this homework</h2>
              <h4>Comment</h4>
            <TextField
              fullWidth={true}
              floatingLabelFixed={true}
              multiLine={true}
              disabled={cantComment||this.state.send}
              value={this.state.comment}
              floatingLabelText="Comment here"
              onChange={(event,value)=>this.setState({comment:value})}
              />
            <h4>Score: {this.state.score===0?'no starts':(this.state.score===1?'one star':this.state.score+' stars')} !</h4>
            <Slider
              min={0}
              max={5}
              step={1}
              value={this.state.score}
              style={{width:250}}
              onChange={(event,value)=>this.setState({score:value})}
              />
            <h4>Homework difficulty: {this.state.difficulty}!</h4>
            <Slider
              min={0}
              max={10}
              step={1}
              value={this.state.difficulty}
              style={{width:250}}
              onChange={(event,value)=>this.setState({difficulty:value})}
              />
            <h4>Work time</h4>
            <TextField
              fullWidth={true}
              floatingLabelFixed={true}
              value={this.state.worktime}
              label="Time spend (in hours)"
              type="number"
              onChange={(event,value)=>this.setState({worktime:value})}
              />
            <FlatButton
              label={"Send"}
              primary={true}
              disabled={cantComment||this.state.send}
              style={{marginTop:10}}
              fullWidth={true}
              onClick={()=>{this.setState({send:true});this.props.comment(this.state.comment,this.props.user.id,this.props.homework.id,this.props.client,this.state.score,this.state.difficulty,this.state.worktime===''?0:parseFloat(this.state.worktime))}} />
          </Paper>
        }
        {
          this.state.send && <h3>Your comment has been submitted!</h3>
      }
      {
        cantComment && <h3>You have already commented on this homework!</h3>
    }
  </div>
);
}
}

const mapStateToProps = ({ user }) => {
  return {user:user.user};
};


export default withApollo(connect(mapStateToProps, {comment})(HomeworkPreview));
