import {LOGIN_SUCCESS,SET_HOMEWORKS,SET_HISTORY} from '../types'

const initialState = {
  courses: [],
  task: null,
  homeworks:[],
  history:null,
  taskListTitle:'',
};

export default function drawerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_HOMEWORKS:{
      return { ...state, homeworks:action.homeworks, taskListTitle:action.name};
    }

    case SET_HISTORY:{
      return { ...state, history:action.history};
    }

    case LOGIN_SUCCESS:{
      return { ...state, courses:action.courses };
    }
    default:
      return state;
  }
}
