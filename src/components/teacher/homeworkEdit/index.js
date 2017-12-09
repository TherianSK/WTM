import React, { Component } from 'react';
import {homework} from './query';
import HomeworkEditLoader2 from './homeworkEditLoader';
import { graphql } from 'react-apollo';
import {setHistory} from '../../../redux/actions';
import { connect } from "react-redux";

class HomeworkEditLoader extends Component {
  componentWillMount(){
    this.props.setHistory(this.props.history);
    console.log(this.props.history);
  }

  render() {
    const homeworkWrapper = graphql(homework,{
        options:{
        variables:{
          id:this.props.match.params.id,userId:this.props.userId
        },
      },
      props: ({ data: { loading, Homework, error, refetch, subscribeToMore } }) => ({
        loadingHomeworks: loading,
        homework: Homework,
        homeworksError: error,
        refetchHomeworks:refetch,
      }),
    });
    const WrappedHomeworkPreview= homeworkWrapper(HomeworkEditLoader2) ;
    return (
      <WrappedHomeworkPreview history={this.props.history} id={this.props.match.params.id}/>
    );
  }
}


const mapStateToProps = ({ data, user }) => {
  const { taskListTitle } = data;
  return { taskListTitle,userId:user.user.id };
};

export default connect(mapStateToProps, {setHistory})(HomeworkEditLoader);
