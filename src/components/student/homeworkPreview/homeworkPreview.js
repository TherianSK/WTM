import React, { Component } from "react";
import TextField from "material-ui/TextField";
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import {comment} from '../../../redux/actions';
import { withApollo } from 'react-apollo';

class HomeworkPreview extends Component {
  constructor(props){
    super(props);
    this.state={
      comment:'',
      send:false
    }
  }

  render() {
    if(this.props.loadingHomeworks){
      return (<div>Loading...</div>);
    }
    let cantComment=this.props.homework.comments.some((comment)=>comment.user.id===this.props.user.id);
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
          <div>
            <h3>Comment this homework</h3>
            <TextField
              fullWidth={true}
              floatingLabelFixed={true}
              multiLine={true}
              disabled={cantComment||this.state.send}
              value={this.state.comment}
              onChange={(event,value)=>this.setState({comment:value})}
              />

            <FlatButton
              label={"Send"}
              primary={true}
              disabled={cantComment||this.state.send}
              style={{marginTop:10}}
              fullWidth={true}
              onClick={()=>{this.setState({send:true});this.props.comment(this.state.comment,this.props.user.id,this.props.homework.id,this.props.client)}} />
          </div>
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
