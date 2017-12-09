import {SET_HOMEWORKS ,SET_HISTORY, LOGIN_SUCCESS} from '../types';
import { addComment,data,addCourse,setStudents } from './dataQuery';


export const setHomeworks = (homeworks,name,id) => {
  return (dispatch) => {
    dispatch({
      type: SET_HOMEWORKS,
      homeworks,
      name,
      id
    });
  }
}

export const setHistory = (history) => {
  return (dispatch) => {
    dispatch({
      type: SET_HISTORY,
      history
    });
  }
}

export const addNewCourse = (client,id,name) => {
  return (dispatch) => {
    client.mutate({
      mutation: addCourse,
      variables: { title:name, teacherId:id}
    }).then(()=>{

      }
    ).catch((error)=>console.log(error));
  }
}


export const comment = (comment,userId,homeworkId,client,rating,difficulty,timeSpend) => {
  return (dispatch) => {
    client.mutate({
      mutation: addComment,
      variables: { body:comment, userId,homeworkId,rating,difficulty,timeSpend}
    }).then(()=>{
      client.query({
        query: data,
      }).then((loggedUserData)=>{
        dispatch({type:LOGIN_SUCCESS,
          user:{id:loggedUserData.data.user.id,email:loggedUserData.data.user.email,isTeacher:loggedUserData.data.user.isTeacher},
          courses:loggedUserData.data.user.courses});
        }).catch((error)=>{
          console.log(error);
        });
      }
    ).catch((error)=>console.log(error));
  }
}

export const setCourseStudents = (users,client, courseId,refetch) => {
  console.log(users);
  return (dispatch) => {
    client.mutate({
      mutation: setStudents,
      variables: { users,id:courseId}
    }).then(()=>refetch()).catch((error)=>console.log(error));
  }
}
