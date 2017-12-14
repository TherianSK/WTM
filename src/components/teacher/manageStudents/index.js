import React, { Component } from 'react';
import {students} from './query';
import ManageStudents from './manageStudents';
import { graphql } from 'react-apollo';
import {setHistory,setNavTitle} from '../../../redux/actions';
import { connect } from "react-redux";

class ManageStudentsLoader extends Component {
  componentWillMount(){
    this.props.setHistory(this.props.history);
    this.props.setNavTitle("Managing students");
  }

  render() {
    const studentsWrapper = graphql(students,{
      options:{
        variables:{
          isTeacher:false,
        },
      },
      props: ({ data: { loading, allUsers,refetch} }) => ({
        loading,
        allUsers,
        refetch
      }),
    });

    const WrappedManageStudents= studentsWrapper(ManageStudents) ;
    return (
      <WrappedManageStudents courseID={this.props.match.params.id} history={this.props.history}/>
    );
  }
}


const mapStateToProps = ({ data, user }) => {
  const { taskListTitle } = data;
  return { taskListTitle,userId:user.user.id };
};

export default connect(mapStateToProps, {setHistory,setNavTitle})(ManageStudentsLoader);
