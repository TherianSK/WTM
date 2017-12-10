import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from 'material-ui/RaisedButton';

import Paper from 'material-ui/Paper';
import Slider from 'material-ui/Slider';
import {addHomework} from './query';
import { connect } from 'react-redux';
import { withApollo } from 'react-apollo';
import {setHistory,setTaskListID} from '../../../redux/actions';

class HomeworkAdd extends Component {
  constructor(props){
    super(props);
    this.state={
      deadline:'',
      description:'',
      expectedDifficulty:0,
      expectedWorkTime: 0,
      points:0,
      startsAt:'',
      title:'',
    }
  }

  componentWillMount(){
    this.props.setHistory(this.props.history);
    this.props.setTaskListID(this.props.match.params.id);
  }

  add(){
    this.props.client.mutate({
      mutation: addHomework,
      variables: {
        deadline:this.state.deadline!==''?this.state.deadline:null,
        description:this.state.description,
        expectedDifficulty:this.state.expectedDifficulty,
        expectedWorkTime:this.state.expectedWorkTime?parseFloat(this.state.expectedWorkTime):null,
        points:this.state.points?parseInt(this.state.points,10):null,
        startsAt:this.state.startsAt!==''?this.state.startsAt:null,
        title:this.state.title,
        courseId:this.props.match.params.id,
      }
    }).then((resp)=>{
        console.log(resp);
        this.props.history.goBack();
      }).catch((error)=>console.log(error));
    }

    render() {
      return (
        <div>
          <h1>Homework add</h1>
          <RaisedButton label="Add new homework" primary={true} onClick={this.add.bind(this)} />
          <RaisedButton label="Go back" secondary={true} onClick={()=>this.props.history.goBack()} />
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
        </div>
      );
    }
  }

  const mapStateToProps = ({ user }) => {
    return {user:user.user};
  };


  export default withApollo(connect(mapStateToProps, {setHistory,setTaskListID})(HomeworkAdd));
