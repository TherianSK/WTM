import {SET_HOMEWORKS ,SET_HISTORY, LOGIN_SUCCESS} from '../types';
import { addComment,data } from './dataQuery';


export const setHomeworks = (homeworks,name) => {
  return (dispatch) => {
    dispatch({
      type: SET_HOMEWORKS,
      homeworks,
      name
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

export const comment = (comment,userId,homeworkId,client) => {
  return (dispatch) => {
    client.mutate({
      mutation: addComment,
      variables: { body:comment, userId,homeworkId}
    }).then(()=>{
      client.query({
        query: data,
      }).then((loggedUserData)=>{
        console.log(loggedUserData);
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
