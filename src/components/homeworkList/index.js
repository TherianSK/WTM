import React, { Component } from 'react';
import {homeworks} from './query';
import HomeworkList from './homeworkList';
import { graphql } from 'react-apollo';

class TaskListLoader extends Component {
  render() {
    const homeworkWrapper = graphql(homeworks, {
      props: ({ data: { loading, allHomework, error, refetch, subscribeToMore } }) => ({
        loadingHomeworks: loading,
        homeworks: allHomework,
        homeworksError: error,
        refetchHomeworks:refetch,
        subscribeToMoreHomeworks:subscribeToMore,
      }),
    });
    const WrappedTaskList= homeworkWrapper(HomeworkList) ;
    return (
      <WrappedTaskList/>
    );
  }
}

export default TaskListLoader;
