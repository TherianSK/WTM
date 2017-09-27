
import { SET_TASKS, SET_PROJECTS, SET_COMPANIES, SET_STATUSES, SET_USERS, SET_CUSTOM_ATTRIBUTES, SET_TASK,SET_TASKS_AND_PROJECTS,START_LOADING,
  SET_TASK_ATTRIBUTES, EDIT_TASK_LIST, ADD_TO_TASK_LIST, SET_COMMENTS, START_LOADING_COMMENTS,ADD_NEW_COMMENT, START_LOADING_ITEMS, SET_ITEMS,
  ADD_NEW_ITEM, DELETE_ITEM,EDIT_ITEM_LIST, SET_ITEM, DELETE_TASK, SET_USER_ATTRIBUTES, ADD_USER, EDIT_USER_LIST, ADD_COMPANY, SET_COMPANY, EDIT_COMPANY_LIST,START_LOADING_PROJECTS,
  DELETE_COMPANY,DELETE_USER,SET_USER_ROLES, ADD_ROLE, DELETE_ROLE, SET_USER_ROLE, EDIT_USER_ROLES, DELETE_STATUS, ADD_STATUS, SET_STATUS, EDIT_STATUSES,
  EDIT_UNITS,SET_UNITS, SET_UNIT,ADD_UNIT,DELETE_UNIT, EDIT_SMTPS,SET_SMTPS,SET_SMTP,ADD_SMTP,DELETE_SMTP,
  EDIT_IMAPS, SET_IMAPS,SET_IMAP,ADD_IMAP,DELETE_IMAP
} from '../types';

const initialState = {
  tasks:[],
  users:[],
  projects:[],
  customAttributes:[],
  task:null,
  project:null,
  loadingData:false,
  loadingComments:false,
  comments:[],
  loadingitems:false,
  items:[],
  loadingProjects:false,
  item:null,
  user:null,
  user_roles:[],
  user_role:null,
  companies:[],
  company:null,
  statuses:[],
  status:null,
  units:[],
  unit:null,
  smtps:[],
  smtp:null,
  imaps:[],
  imap:null
  
};


export default function taskReducer (state = initialState, action) {
  switch (action.type) {
    case EDIT_IMAPS:{
      let newIMAPS= [...state.imaps];
      newIMAPS.splice(newIMAPS.findIndex((imap)=>imap.id==action.payload.imap.id),1,action.payload.imap);
      return {
        ...state,
        imaps:newIMAPS
      };
    }
    case SET_IMAPS:
      return {
        ...state,
        imaps: action.payload.imaps,
        loadingData:false,
      };
    case SET_IMAP:{
      return {
        ...state,
        imap:action.payload.imap,
        loadingData:false,
      };
    }
    case ADD_IMAP:{
      return {
        ...state,
        imaps:[action.payload.imap,...state.imaps]
      };
    }
    case DELETE_IMAP:{
      let newIMAPS= [...state.imaps];
      newIMAPS.splice(newIMAPS.findIndex((imap)=>imap.id==action.payload.id),1);
      return {
        ...state,
        imaps:newIMAPS
      };
    }
    case EDIT_SMTPS:{
      let newSMTPS= [...state.smtps];
      newSMTPS.splice(newSMTPS.findIndex((smtp)=>smtp.id==action.payload.smtp.id),1,action.payload.smtp);
      return {
        ...state,
        smtps:newSMTPS
      };
    }
    case SET_SMTPS:
      return {
        ...state,
        smtps: action.payload.smtps,
        loadingData:false,
      };
    case SET_SMTP:{
      return {
        ...state,
        smtp:action.payload.smtp,
        loadingData:false,
      };
    }
    case ADD_SMTP:{
      return {
        ...state,
        smtps:[action.payload.smtp,...state.smtps]
      };
    }
    case DELETE_SMTP:{
      let newSMTPS= [...state.smtps];
      newSMTPS.splice(newSMTPS.findIndex((smtp)=>smtp.id==action.payload.id),1);
      return {
        ...state,
        smtps:newSMTPS
      };
    }
    case EDIT_UNITS:{
      let newUnits= [...state.units];
      newUnits.splice(newUnits.findIndex((unit)=>unit.id==action.payload.unit.id),1,action.payload.unit);
      return {
        ...state,
        units:newUnits
      };
    }
    case SET_UNITS:
      return {
        ...state,
        units: action.payload.units,
        loadingData:false,
      };
    case SET_UNIT:{
      return {
        ...state,
        unit:action.payload.unit,
        loadingData:false,
      };
    }
    case ADD_UNIT:{
      return {
        ...state,
        units:[action.payload.unit,...state.units]
      };
    }
    case DELETE_UNIT:{
      let newUnits= [...state.units];
      newUnits.splice(newUnits.findIndex((unit)=>unit.id==action.payload.id),1);
      return {
        ...state,
        units:newUnits
      };
    }
    case EDIT_STATUSES:{
      let newStatuses= [...state.statuses];
      newStatuses.splice(newStatuses.findIndex((status)=>status.id==action.payload.status.id),1,action.payload.status);
      return {
        ...state,
        statuses:newStatuses
      };
    }
    case SET_STATUSES:
      return {
        ...state,
        statuses: action.payload.statuses,
        loadingData:false,
      };
    case SET_STATUS:{
      return {
        ...state,
        status:action.payload.status,
        loadingData:false,
      };
    }
    case ADD_STATUS:{
      return {
        ...state,
        statuses:[action.payload.status,...state.statuses]
      };
    }
    case DELETE_STATUS:{
      let newStatuses= [...state.statuses];
      newStatuses.splice(newStatuses.findIndex((status)=>status.id==action.payload.id),1);
      return {
        ...state,
        statuses:newStatuses
      };
    }
    case SET_USER_ROLES:{
      return {
        ...state,
        user_roles:action.payload.user_roles,
        loadingData:false,
      };
    }
    case ADD_ROLE:{
      return {
        ...state,
        user_roles:[action.payload.role,...state.user_roles],
        loadingData:false,
      };
    }
    case SET_USER_ROLE:{
      return {
        ...state,
        loadingData:false,
        user_role:action.payload.role
      };
    }
    case DELETE_ROLE:{
      let newRoles= [...state.user_roles];
      newRoles.splice(newRoles.findIndex((role)=>role.id==action.payload.id),1);
      return {
        ...state,
        user_roles:newRoles
      };
    }
    case EDIT_USER_ROLES:{
      let newRoles= [...state.user_roles];
      newRoles.splice(newRoles.findIndex((role)=>role.id==action.payload.role.id),1,action.payload.role);
      return {
        ...state,
        user_roles:newRoles
      };
    }
    case EDIT_COMPANY_LIST:{
      let newCompanies= [...state.companies];
      newCompanies.splice(newCompanies.findIndex((company)=>company.id==action.payload.company.id),1,action.payload.company);
      return {
        ...state,
        companies:newCompanies
      };
    }
    case SET_COMPANIES:
      return {
        ...state,
        companies: action.payload.companies,
        loadingData:false,
      };
    case SET_COMPANY:{
      return {
        ...state,
        company:action.payload.company
      };
    }
    case ADD_COMPANY:{
      return {
        ...state,
        companies:[action.payload.company,...state.companies]
      };
    }
    case DELETE_COMPANY:{
      let newCompanies= [...state.companies];
      newCompanies.splice(newCompanies.findIndex((companies)=>companies.id==action.payload.id),1);
      return {
        ...state,
        companies:newCompanies
      };
    }
    case DELETE_USER:{
      let newUsers= [...state.users];
      newUsers.splice(newUsers.findIndex((user)=>user.id==action.payload.id),1);
      return {
        ...state,
        users:newUsers
      };
    }
    case EDIT_USER_LIST:{
      let newUsers= [...state.users];
      newUsers.splice(newUsers.findIndex((user)=>user.id==action.payload.user.id),1,action.payload.user);
      return {
        ...state,
        users:newUsers
      };
    }
    case ADD_USER:{
      return {
        ...state,
        users:[action.payload.user,...state.users]
      };
    }
    case SET_ITEM:{
      return {
        ...state,
        item:action.payload.item
      };
    }
    case SET_USER_ATTRIBUTES:{
      return {
        ...state,
        companies:action.payload.companies,
        user_roles:action.payload.user_roles,
        user:action.payload.user?action.payload.user:null
      };
    }
    case DELETE_ITEM:{
      let newItems= [...state.items];
      newItems.splice(newItems.findIndex((item)=>item.id==action.payload.id),1);
      return {
        ...state,
        items:newItems,
      };
    }
    case EDIT_ITEM_LIST:{
      let newItems= [...state.items];
      newItems.splice(newItems.findIndex((item)=>item.id==action.payload.item.id),1,action.payload.item);
      return {
        ...state,
        items:newItems
      };
    }
    case ADD_NEW_ITEM:{
      return {
        ...state,
        items:[action.payload.item,...state.items],
      };
    }
    case START_LOADING_ITEMS:
      return {
        ...state,
        loadingItems: true,
      };
    case START_LOADING_PROJECTS:
      return {
        ...state,
        loadingProjects: true,
      };
    case SET_ITEMS:{
      return {
        ...state,
        items:action.payload.items,
        units:action.payload.units,
        loadingItems:false,
      };
      }
    case ADD_NEW_COMMENT:{
      return {
        ...state,
        comments:[action.payload.comment,...state.comments],
      };
      }
    case SET_COMMENTS:{
      return {
        ...state,
        comments:action.payload.comments,
        loadingComments:false,
      };
      }
    case DELETE_TASK:{
      let newTasks= [...state.tasks];
      newTasks.splice(newTasks.findIndex((item)=>item.id==action.payload.id),1);
      return {
        ...state,
        tasks:newTasks,
      };
    }
    case EDIT_TASK_LIST:{
      let newTasks= [...state.tasks];
      newTasks.splice(newTasks.findIndex((task)=>task.id==action.payload.taskInList.id),1,action.payload.taskInList);
      return {
        ...state,
        tasks:newTasks
      };
      }
    case ADD_TO_TASK_LIST:{
      return {
        ...state,
        tasks:[action.payload.taskInList,...state.tasks]
      };
    }
    case START_LOADING:
      return {
        ...state,
        loadingData: true,
      };
    case START_LOADING_COMMENTS:
      return {
        ...state,
        loadingComments: true,
      };
    case SET_TASK_ATTRIBUTES:
      return {
        ...state,
        users:action.payload.users,
        companies:action.payload.companies,
        statuses:action.payload.statuses,
        projects:action.payload.projects,
        task:action.payload.task,
        loadingData:false
      };
    case SET_TASKS_AND_PROJECTS:
      return {
        ...state,
        projects: action.payload.projects,
        tasks: action.payload.tasks,
        loadingData:false,
      };
    case SET_TASKS:
      return {
        ...state,
        tasks: action.payload.tasks,
        loadingData:false,
      };
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.payload.projects,
        loadingProjects:false,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload.users,
        loadingData:false,
      };
    case SET_CUSTOM_ATTRIBUTES:
        return {
          ...state,
          customAttributes: action.payload.customAttributes,
          loadingData:false,
        };
    case SET_TASK:
        return {
          ...state,
          task: action.payload.task,
          loadingData:false,
        };
    default:
      return state;
  }

  return state;
}
