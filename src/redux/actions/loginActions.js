import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, REGISTRATION_FAIL, REGISTRATION_SUCCESS, SET_HOMEWORKS } from '../types';
//import { graphql } from 'react-apollo';
import { signinUser, register } from './loginQuery';

//start login of user
export const loginUser = (email, password, client) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_START });
    client.mutate({
      mutation: signinUser,
      variables: { email, password }
    }).then(
      (loggedUserData)=>{
        dispatch({type:LOGIN_SUCCESS,
          user:{id:loggedUserData.data.signinUser.user.id,email:loggedUserData.data.signinUser.user.email,isTeacher:loggedUserData.data.signinUser.user.isTeacher},
          token:loggedUserData.data.signinUser.token,
          courses:loggedUserData.data.signinUser.user.courses});
          let token =loggedUserData.data.signinUser.token;
          if (typeof client.networkInterface.use === 'function') {
            client.networkInterface.use(
              [
                {
                  applyMiddleware(req, next) {
                    req.options.headers = {
                      ...req.options.headers,
                      authorization: token ? `Bearer ${token}` : null
                    };
                    next();
                  }
                }
              ]
            );
          } else {
            client.networkInterface.__accessToken = token;
          }
          let homeworks=[];
          loggedUserData.data.signinUser.user.courses.map((course)=>homeworks=homeworks.concat(course.homeworks));
          homeworks.sort((item1,item2)=>item1.deadline>item2.deadline);
          dispatch({type:SET_HOMEWORKS,name:'Deadlines',homeworks});
        }).catch((error)=>{
          console.log(error);
          dispatch({type:LOGIN_FAIL});
        });
      };
    };

    export const registerUser = (email, password,isTeacher, client) => {
      return (dispatch) => {
        client.mutate({
          mutation: register,
          variables: { authProvider:{email:{email, password}}, isTeacher }
        }).then(
          ()=>{
            dispatch({type:REGISTRATION_SUCCESS});
          }).catch((error)=>{
            dispatch({type:REGISTRATION_FAIL});
            console.log(error);
          });
        };
      };
