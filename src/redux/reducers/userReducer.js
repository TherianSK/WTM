import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL} from '../types'

const initialState = {
  token: null,
  user: null,
  loading:false
};

export default function drawerReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
        return { ...state, loading: false, token: action.token, user: action.user };
    case LOGIN_FAIL:
      return { ...state, loading: false, token: null, user: null  };
    default:
      return state;
  }
}
