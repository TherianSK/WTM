import React, { Component } from "react";
import HomeworkEdit from './homeworkEdit';

class HomeworkEditLoader extends Component {

  render() {
    if(this.props.loadingHomeworks){
      return (<div>Loading...</div>);
    }
    console.log(this.props);
    return (
      <HomeworkEdit history={this.props.history} id={this.props.id} refetch={this.props.refetchHomeworks} homework={this.props.homework} />
    );
  }
}

export default HomeworkEditLoader;
