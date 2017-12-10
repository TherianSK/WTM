import React, { Component } from 'react';
import {homework} from './query';
import HomeworkPreview from './homeworkPreview';
import { graphql } from 'react-apollo';
import {setHistory} from '../../../redux/actions';
import { connect } from "react-redux";

class HomeworkPreviewLoader extends Component {
  componentWillMount(){
    this.props.setHistory(this.props.history);
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
    const WrappedHomeworkPreview= homeworkWrapper(HomeworkPreview) ;
    return (
      <WrappedHomeworkPreview/>
    );
  }
}


const mapStateToProps = ({ data, user }) => {
  const { taskListTitle } = data;
  return { taskListTitle,userId:user.user.id };
};

export default connect(mapStateToProps, {setHistory})(HomeworkPreviewLoader);
