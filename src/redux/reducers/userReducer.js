import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL,REGISTRATION_SUCCESS,REGISTRATION_FAIL,LOGOUT} from '../types'

const initialState = {
  token: null,
  user: null,
  loading:false,
  error:false,
  regError:false,
  registered:false,
};

export default function drawerReducer(state = initialState, action) {


  switch (action.type) {
    case LOGOUT:
    return initialState;
    case LOGIN_START:
    return { ...state, loading: true,error:false };
    case REGISTRATION_SUCCESS:
    return { ...state, regError:false, registered:true };
    case REGISTRATION_FAIL:
    return { ...state, regError:true };
    case LOGIN_SUCCESS:
    return { ...state, loading: false, token: action.token?action.token:state.token, user: action.user,error:false };
    case LOGIN_FAIL:
    return { ...state, loading: false, token: null, user: null,error:true };
    default:
    return state;
  }
}
