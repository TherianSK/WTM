import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from '../types';
//import { graphql } from 'react-apollo';
import { signinUser } from './loginQuery';

//start login of user
export const loginUser = (email, password, client) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_START });
    client.mutate({
      mutation: signinUser,
      variables: { email, password }
    }).then(
      (loggedUserData)=>{
        console.log(loggedUserData);
      })

  };
};
