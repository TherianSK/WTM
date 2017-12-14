import {LOGIN_SUCCESS,SET_HOMEWORKS,SET_HISTORY,SET_LIST_ID, SET_NAVTITLE,IS_MOBILE} from '../types'

const initialState = {
  courses: [],
  task: null,
  history:null,
  homeworks:[],
  taskListID:null,
  taskListTitle:'',
  navTitle:'',
  isMobile:false,
};

export default function drawerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LIST_ID:{
      return { ...state, taskListID:action.id};
    }
    case IS_MOBILE:{
      return { ...state, isMobile:action.isMobile};
    }
    case SET_NAVTITLE:{
      return { ...state, navTitle:action.title};
    }
    case SET_HOMEWORKS:{
      return { ...state, homeworks:action.homeworks, taskListTitle:action.name,navTitle:action.name,taskListID:action.id};
    }

    case SET_HISTORY:{
      return { ...state, history:action.history};
    }

    case LOGIN_SUCCESS:{
      return { ...state, courses:action.courses,navTitle:"Deadlines" };
    }
    default:
      return state;
  }
}
