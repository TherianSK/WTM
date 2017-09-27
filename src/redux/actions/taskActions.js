import {SET_TASKS, SET_PROJECTS, SET_COMPANIES, SET_USERS, SET_TASK, SET_TASKS_AND_PROJECTS,
  START_LOADING,SET_TASK_ATTRIBUTES, EDIT_TASK_LIST, ADD_TO_TASK_LIST, SET_COMMENTS, START_LOADING_COMMENTS,ADD_NEW_COMMENT,
  START_LOADING_ITEMS, SET_ITEMS, ADD_NEW_ITEM, DELETE_ITEM, EDIT_ITEM_LIST, SET_ITEM, SET_USER_ATTRIBUTES,EDIT_USER_LIST,
  DELETE_TASK, ADD_USER, ADD_COMPANY,SET_COMPANY, EDIT_COMPANY_LIST,START_LOADING_PROJECTS,DELETE_COMPANY, DELETE_USER,
  SET_USER_ROLES,ADD_ROLE, DELETE_ROLE, SET_USER_ROLE, EDIT_USER_ROLES,
  SET_STATUSES,DELETE_STATUS, ADD_STATUS, SET_STATUS, EDIT_STATUSES,
  EDIT_SMTPS,SET_SMTPS,SET_SMTP,ADD_SMTP,DELETE_SMTP,
  EDIT_UNITS,SET_UNITS, SET_UNIT,ADD_UNIT,DELETE_UNIT,
  EDIT_IMAPS, SET_IMAPS,SET_IMAP,ADD_IMAP,DELETE_IMAP} from '../types';
import {TASK_LIST, PROJECT_LIST,COMPANIES_LIST,STATUSES_LIST,USERS_LIST,UNITS_LIST, TASK, COMMENTS, ITEMS_LIST, USER, USER_ROLES,USER_ROLE, COMPANY, STATUS, SMTP_LIST, IMAP } from '../urls';

export const getIMAPs = () => {
  return (dispatch) => {
    fetch(IMAP, {
      method: 'GET',
    }).then((response)=> response.json().then(response => {
      dispatch({type: SET_IMAPS, payload:{imaps:response}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const deleteIMAP = (id) => {
  return (dispatch) => {
      fetch(IMAP+'/'+id, {
        method: 'DELETE',
      })
      .then((response)=>dispatch({type: DELETE_IMAP, payload:{id}}))
      .catch(function (error) {
        console.log(error);
      });
  };
};
export const getIMAP = (id) => {
  return (dispatch) => {
    let url=IMAP+'/'+id;
    fetch(url, {
      method: 'GET',
    }).then((response) =>response.json().then((response) => {
      dispatch({type: SET_IMAP, payload:{imap:response}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const addIMAP = (imap) => {
  return (dispatch) => {
    fetch(IMAP, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body:JSON.stringify(imap),
    })
    .then((response)=>response.json().then((response)=>{
    dispatch({type: ADD_IMAP, payload:{imap:Object.assign({},imap,{id:response.id})}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const editIMAP = (imap,id) => {
  return (dispatch) => {
    let URL = IMAP + '/' + id;
      fetch(URL, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body:JSON.stringify(imap),
      })
    .then((response)=>response.json().then((response)=>{
      dispatch({type: EDIT_IMAPS, payload:{imap:Object.assign({},imap,{id})}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};

export const getSMTPs = () => {
  return (dispatch) => {
    fetch(SMTP_LIST, {
      method: 'GET',
    }).then((response)=> response.json().then(response => {
      dispatch({type: SET_SMTPS, payload:{smtps:response}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const deleteSMTP = (id) => {
  return (dispatch) => {
      fetch(SMTP_LIST+'/'+id, {
        method: 'DELETE',
      })
      .then((response)=>dispatch({type: DELETE_SMTP, payload:{id}}))
      .catch(function (error) {
        console.log(error);
      });
  };
};
export const getSMTP = (id) => {
  return (dispatch) => {
    let url=SMTP_LIST+'/'+id;
    fetch(url, {
      method: 'GET',
    }).then((response) =>response.json().then((response) => {
      dispatch({type: SET_SMTP, payload:{smtp:response}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const addSMTP = (smtp) => {
  return (dispatch) => {
    fetch(SMTP_LIST, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body:JSON.stringify(smtp),
    })
    .then((response)=>response.json().then((response)=>{
    dispatch({type: ADD_SMTP, payload:{smtp:Object.assign({},smtp,{id:response.id})}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const editSMTP = (smtp,id) => {
  return (dispatch) => {
    let URL = SMTP_LIST + '/' + id;
      fetch(URL, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body:JSON.stringify(smtp),
      })
    .then((response)=>response.json().then((response)=>{
      dispatch({type: EDIT_SMTPS, payload:{smtp:Object.assign({},smtp,{id})}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};

export const getUnits = () => {
  return (dispatch) => {
    fetch(UNITS_LIST, {
      method: 'GET',
    }).then((response)=> response.json().then(response => {
      dispatch({type: SET_UNITS, payload:{units:response}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const deleteUnit = (id) => {
  return (dispatch) => {
      fetch(UNITS_LIST+'/'+id, {
        method: 'DELETE',
      })
      .then((response)=>dispatch({type: DELETE_ROLE, payload:{id}}))
      .catch(function (error) {
        console.log(error);
      });
  };
};
export const getUnit = (id) => {
  return (dispatch) => {
    let url=UNITS_LIST+'/'+id;
    fetch(url, {
      method: 'GET',
    }).then((response) =>response.json().then((response) => {
      dispatch({type: SET_UNIT, payload:{unit:response}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const addUnit = (newUnit) => {
  return (dispatch) => {
    fetch(UNITS_LIST, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body:JSON.stringify(newUnit),
    })
    .then((response)=>response.json().then((response)=>{
    dispatch({type: ADD_UNIT, payload:{unit:Object.assign({},newUnit,{id:response.id})}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const editUnit = (unit,id) => {
  return (dispatch) => {
    let URL = UNITS_LIST + '/' + id;
      fetch(URL, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body:JSON.stringify(unit),
      })
    .then((response)=>response.json().then((response)=>{
      dispatch({type: EDIT_UNITS, payload:{unit:Object.assign({},unit,{id})}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};

export const openAddingOfUser = (history) => {
  return (dispatch) => {
    Promise.all([
      fetch(COMPANIES_LIST, {
        method: 'GET',
      }),
      fetch(USER_ROLES, {
        method: 'GET',
      })
    ]).then(([response1,response2])=>Promise.all([response1.json(),response2.json()]).then(([response1,response2])=>{
      dispatch({type: SET_USER_ATTRIBUTES, payload:{companies:response1,user_roles:response2}});
      history.push('/settings/users/add');
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const openEditingOfUser = (id,history) => {
  return (dispatch) => {
    Promise.all([
      fetch(COMPANIES_LIST, {
        method: 'GET',
      }),
      fetch(USER_ROLES, {
        method: 'GET',
      }),
      fetch(USER+'/'+id, {
        method: 'GET',
      }),
    ]).then(([response1,response2,response3])=>Promise.all([response1.json(),response2.json(),response3.json()]).then(([response1,response2,response3])=>{
      dispatch({type: SET_USER_ATTRIBUTES, payload:{companies:response1,user_roles:response2,user:response3}});
      history.push('/settings/users/edit/'+id);
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const addUser = (user,userInList) => {
  return (dispatch) => {
    Promise.all([
      fetch(USERS_LIST, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body:JSON.stringify(userInList),
      }),
      fetch(USER, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body:JSON.stringify(user),
      })
    ]).then(([response1,response2])=>Promise.all([response1.json(),response2.json()]).then(([response1,response2])=>{
      dispatch({type: ADD_USER, payload:{user:Object.assign({},{id:response2.id},user:userInList)}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const editUser = (user,listUser) => {
  return (dispatch) => {
    let listURL = USERS_LIST + '/' + listUser.id;
    let userURL = USER + '/' + listUser.id;
    Promise.all([
      fetch(listURL, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body:JSON.stringify(listUser),
      }),
      fetch(userURL, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body:JSON.stringify(user),
      })
    ])
    .then(([response1,response2])=>Promise.all([response1.json(),response2.json()]).then(([response1,response2])=>{
      dispatch({type: EDIT_USER_LIST, payload:{user:listUser}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const deleteUser = (id) => {
  return (dispatch) => {
    Promise.all([
      fetch(USERS_LIST+'/'+id, {
        method: 'DELETE',
      }),
      fetch(USER+'/'+id, {
        method: 'DELETE',
      })
    ]).then((responses)=>dispatch({type: DELETE_USER, payload:{id}}))
    .catch(function (error) {
      console.log(error);
    });
  };
};

export const addCompany = (newCompany) => {
  return (dispatch) => {
    Promise.all([
      fetch(COMPANIES_LIST, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body:JSON.stringify({title:newCompany.title,is_active: newCompany.is_active}),
      }),
      fetch(COMPANY, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body:JSON.stringify(newCompany),
      })
    ]).then(([response1,response2])=>Promise.all([response1.json(),response2.json()]).then(([response1,response2])=>{
      dispatch({type: ADD_COMPANY, payload:{company:{title:newCompany.title,id:response2.id}}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const getCompanies = () => {
  return (dispatch) => {
    fetch(COMPANIES_LIST, {
      method: 'GET',
    }).then((response)=> response.json().then(response => {
      dispatch({type: SET_COMPANIES, payload:{companies:response}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const openEditingOfCompany = (id,history) => {
  return (dispatch) => {
    fetch(COMPANY+'/'+id, {
      method: 'GET',
    }).then((response)=>response.json().then((response)=>{
      dispatch({type: SET_COMPANY, payload:{company:response}});
      history.push('/settings/companies/edit/'+id);
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const editCompany = (company,id) => {
  return (dispatch) => {
    let listURL = COMPANIES_LIST + '/' + id;
    let companyURL = COMPANY + '/' + id;
    console.log(company.is_active);
    Promise.all([
      fetch(listURL, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body:JSON.stringify({title:company.title,is_active:company.is_active}),
      }),
      fetch(companyURL, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body:JSON.stringify(company),
      })
    ])
    .then(([response1,response2])=>Promise.all([response1.json(),response2.json()]).then(([response1,response2])=>{
      dispatch({type: EDIT_COMPANY_LIST, payload:{company:{id,title:company.title,is_active:company.is_active}}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const deleteCompany = (id) => {
  return (dispatch) => {
    Promise.all([
      fetch(COMPANIES_LIST+'/'+id, {
        method: 'DELETE',
      }),
      fetch(COMPANY+'/'+id, {
        method: 'DELETE',
      })
    ]).then((responses)=>dispatch({type: DELETE_COMPANY, payload:{id}}))
    .catch(function (error) {
      console.log(error);
    });
  };
};

export const getUserRoles = () => {
  return (dispatch) => {
    fetch(USER_ROLES, {
      method: 'GET',
    }).then((response)=> response.json().then(response => {
      dispatch({type: SET_USER_ROLES, payload:{user_roles:response}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const deleteRole = (id) => {
  return (dispatch) => {
    Promise.all([
      fetch(USER_ROLES+'/'+id, {
        method: 'DELETE',
      }),
      fetch(USER_ROLE+'/'+id, {
        method: 'DELETE',
      })
    ]).then((responses)=>dispatch({type: DELETE_ROLE, payload:{id}}))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const getRole = (id) => {
  return (dispatch) => {
    let url=USER_ROLE+'/'+id;
    fetch(url, {
      method: 'GET',
    }).then((response) =>response.json().then((response) => {
      dispatch({type: SET_USER_ROLE, payload:{role:response}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const addRole = (newRole) => {
  return (dispatch) => {
    Promise.all([
      fetch(USER_ROLES, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body:JSON.stringify({title:newRole.title,is_active: newRole.is_active,order:newRole.order}),
      }),
      fetch(USER_ROLE, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body:JSON.stringify(newRole),
      })
    ]).then(([response1,response2])=>Promise.all([response1.json(),response2.json()]).then(([response1,response2])=>{
      dispatch({type: ADD_ROLE, payload:{role:{title:newRole.title,is_active: newRole.is_active,order:newRole.order,id:response1.id}}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const editRole = (role,id) => {
  return (dispatch) => {
    let listURL = USER_ROLES + '/' + id;
    let roleURL = USER_ROLE + '/' + id;
    Promise.all([
      fetch(listURL, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body:JSON.stringify({title:role.title,is_active:role.is_active,order:role.order}),
      }),
      fetch(roleURL, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body:JSON.stringify(role),
      })
    ])
    .then(([response1,response2])=>Promise.all([response1.json(),response2.json()]).then(([response1,response2])=>{
      dispatch({type: EDIT_USER_ROLES, payload:{role:{id,title:role.title,is_active:role.is_active,order:role.order}}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};

export const getProjects = () => {
  return (dispatch) => {
    dispatch({type:START_LOADING_PROJECTS});
    fetch(PROJECT_LIST, {
      method: 'GET',
    }).then((response) =>response.json().then((response) => {
      dispatch({type: SET_PROJECTS, payload:{projects:response}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const getTasks = () => {
  return (dispatch) => {
    fetch(TASK_LIST, {
      method: 'GET',
    }).then((response) =>response.json().then((response) => {
      dispatch({type: SET_TASKS, payload:{tasks:response}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const startLoading = () => {
  return (dispatch) => {
    dispatch({type: START_LOADING });
  };
};

export const getStatuses = () => {
  return (dispatch) => {
    fetch(STATUSES_LIST, {
      method: 'GET',
    }).then((response)=> response.json().then(response => {
      dispatch({type: SET_STATUSES, payload:{statuses:response}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const deleteStatus = (id) => {
  return (dispatch) => {
    Promise.all([
      fetch(STATUSES_LIST+'/'+id, {
        method: 'DELETE',
      }),
      fetch(STATUS+'/'+id, {
        method: 'DELETE',
      })
    ]).then((responses)=>dispatch({type: DELETE_STATUS, payload:{id}}))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const getStatus = (id) => {
  return (dispatch) => {
    let url=STATUS+'/'+id;
    fetch(url, {
      method: 'GET',
    }).then((response) =>response.json().then((response) => {
      dispatch({type: SET_STATUS, payload:{status:response}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const addStatus = (newStatus) => {
  return (dispatch) => {
    Promise.all([
      fetch(STATUSES_LIST, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body:JSON.stringify({title:newStatus.title,color: newStatus.color,order:newStatus.order}),
      }),
      fetch(STATUS, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body:JSON.stringify(newStatus),
      })
    ]).then(([response1,response2])=>Promise.all([response1.json(),response2.json()]).then(([response1,response2])=>{
      dispatch({type: ADD_STATUS, payload:{role:{title:newStatus.title,color: newStatus.color,order:newStatus.order,id:response1.id}}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const editStatus = (status,id) => {
  return (dispatch) => {
    let listURL = STATUSES_LIST + '/' + id;
    let statusURL = STATUS + '/' + id;
    Promise.all([
      fetch(listURL, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body:JSON.stringify({title:status.title,color: status.color,order:status.order}),
      }),
      fetch(statusURL, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body:JSON.stringify(status),
      })
    ])
    .then(([response1,response2])=>Promise.all([response1.json(),response2.json()]).then(([response1,response2])=>{
      dispatch({type: EDIT_STATUSES, payload:{status:{id,title:status.title,color: status.color,order:status.order}}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};



////////////////////////////////////////////////////////////






export const openAddingOfItem = (id) => {
  return (dispatch) => {
    fetch(UNITS_LIST, {
      method: 'GET',
    }).then((response)=> response.json().then(response => {
      dispatch({type: SET_UNITS, payload:{units:response}});
      //Link
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const startLoadingItems = () => {
  return (dispatch) => {
    dispatch({type: START_LOADING_ITEMS });
  };
};
export const openEditingOfItem = (id,projectID) => {
  return (dispatch) => {
    let url = ITEMS_LIST+ '/' + id;
    fetch(url, {
      method: 'GET',
    }).then((response)=> response.json().then(response => {
      dispatch({type: SET_ITEM, payload:{item:response}});
      //Link
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const getItemsAndUnits = () => {
  return (dispatch) => {
    Promise.all([
      fetch(ITEMS_LIST, {
        method: 'GET',
      }),
      fetch(UNITS_LIST, {
        method: 'GET',
      })
    ])
    .then(([response1,response2]) =>Promise.all([response1.json(),response2.json()]).then(([response1,response2]) => {
      dispatch({type: SET_ITEMS, payload:{items:response1,units:response2}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const addItem = (item) => {
  return (dispatch) => {
    fetch(ITEMS_LIST, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body:JSON.stringify(item),
    }).then((response)=>response.json().then((response)=>{
      dispatch({type: ADD_NEW_ITEM, payload:{item:Object.assign({},item,{id:response.id})}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const deleteItem = (id) => {
  return (dispatch) => {
    let url= ITEMS_LIST+ '/' + id
    fetch(url, {
      method: 'DELETE',
    }).then((response)=>response.json().then((response)=>{
      dispatch({type: DELETE_ITEM, payload:{id}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const saveItemEdit = (item) => {
  return (dispatch) => {
    let url = ITEMS_LIST + '/' + item.id;
    fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body:JSON.stringify(item),
    }).then((response)=>response.json().then((response)=>{
      console.log(response);
      dispatch({type: EDIT_ITEM_LIST, payload:{item}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};

export const getComments = () => {
  return (dispatch) => {
    fetch(COMMENTS, {
      method: 'GET',
    }).then((response) =>response.json().then((response) => {
      dispatch({type: SET_COMMENTS, payload:{comments:response}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
export const addComment = (comment) => {
  return (dispatch) => {
    fetch(COMMENTS, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body:JSON.stringify(comment),
    }).then((response)=>response.json().then((response)=>{
      dispatch({type: ADD_NEW_COMMENT, payload:{comment:Object.assign({},comment,{id:response.id})}});
    }))
  };
};

export const getTasksAndProjects = () => {
  return (dispatch) => {
    Promise.all([
      fetch(TASK_LIST, {
        method: 'GET',
      }),
      fetch(PROJECT_LIST, {
        method: 'GET',
      })])
    .then(([response1,response2]) =>
    {
      Promise.all([response1.json(),response2.json()]).then(([data1,data2]) => {
        dispatch({type: SET_TASKS_AND_PROJECTS, payload:{tasks:data1,projects:data2}});
      }).catch(function (error) {
          console.log(error);
        });
    }
  ).catch(function (error) {
    console.log(error);
  });
  };
};
export const getTaskAttributes = (id) => {
  return (dispatch) => {
    let taskURL = TASK+'/?id='+id;
    Promise.all([
      fetch(USERS_LIST, {
        method: 'GET',
      }),
      fetch(COMPANIES_LIST, {
        method: 'GET',
      }),
      fetch(STATUSES_LIST, {
        method: 'GET',
      }),
      fetch(PROJECT_LIST, {
        method: 'GET',
      }),
      fetch(taskURL, {
        method: 'GET',
      })])
    .then(([response1,response2,response3,response4,response5]) =>
      {
        Promise.all([response1.json(),response2.json(),response3.json(),response4.json(),response5.json()]).then(([users,companies,statuses,projects,[task]]) => {
          dispatch({type: SET_TASK_ATTRIBUTES,payload:{users,companies,statuses,projects,task}});
        }).catch(function (error) {
            console.log(error);
          });
      }
    ).catch(function (error) {
      console.log(error);
    });
  };
};

export const getAttributes = () => {
  return (dispatch) => {
    Promise.all([
      fetch(USERS_LIST, {
        method: 'GET',
      }),
      fetch(COMPANIES_LIST, {
        method: 'GET',
      }),
      fetch(STATUSES_LIST, {
        method: 'GET',
      }),
      fetch(PROJECT_LIST, {
        method: 'GET',
      })])
    .then(([response1,response2,response3,response4]) =>
      {
        Promise.all([response1.json(),response2.json(),response3.json(),response4.json()]).then(([users,companies,statuses,projects]) => {
          dispatch({type: SET_TASK_ATTRIBUTES,payload:{users,companies,statuses,projects,task:{}}});
        }).catch(function (error) {
            console.log(error);
          });
      }
    ).catch(function (error) {
      console.log(error);
    });
  };
};


export const startLoadingComments = () => {
  return (dispatch) => {
    dispatch({type: START_LOADING_COMMENTS });
  };
};


export const getTask = (id) => {
  return (dispatch) => {
    let url=TASK+'/?id='+id;
    fetch(url, {
      method: 'GET',
    }).then((response) =>response.json().then((response) => {
      dispatch({type: SET_TASK, payload:{task:response}});
    }))
    .catch(function (error) {
      console.log(url);
      console.log(error);
    });
  };
};


export const getUsers = () => {
  return (dispatch) => {
    fetch(USERS_LIST, {
      method: 'GET',
    }).then((response)=> response.json().then(response => {
      dispatch({type: SET_USERS, payload:{users:response}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};

export const saveEdit = (task,assignedTo,project,status) => {
  return (dispatch) => {
    let taskURL = TASK + '/'+ task.id;
    let taskListURL = TASK_LIST + '/'+ task.id;
    Promise.all([
      fetch(taskURL, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body:JSON.stringify(task),
      }),
      fetch(taskListURL, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body:JSON.stringify(Object.assign({},task,{assignedTo,project,status})),
      })
    ])
    .then((responses) =>
      dispatch({type: EDIT_TASK_LIST, payload:{taskInList:Object.assign({},task,{assignedTo,project,status})} })
    )
    .catch(function (error) {
      console.log(error);
    });
  };
};

export const addTask = (task,assignedTo,project,status) => {
  return (dispatch) => {
    let ACL = {
      create_task: true,
      resolve_task: true,
      delete_task: true,
      view_internal_note: false
    };
    Promise.all([
      fetch(TASK, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body:JSON.stringify(Object.assign({},task,{ACL})),
      }),
      fetch(TASK_LIST, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',

        body:JSON.stringify(Object.assign({},task,{assignedTo,project,status})),
      })
    ])
    .then(([response1,response2]) =>Promise.all([response1.json(),response2.json()]).then(([response1,response2]) =>{
      dispatch({type: ADD_TO_TASK_LIST, payload:{taskInList:Object.assign({},task,{assignedTo,id:response1.id,project,status})} });
      }
    ))
    .catch(function (error) {
      console.log(error);
    });
  };
};

export const deleteTask = (id) => {
  return (dispatch) => {
    let taskListURL= TASK_LIST+ '/' + id
    let taskURL= TASK+ '/' + id
    Promise.all([
      fetch(taskListURL, {
        method: 'DELETE',
      }),
      fetch(taskURL, {
        method: 'DELETE',
      })
    ]).then(([response1,response2])=>Promise.all([response1.json(),response2.json()]).then(([response1,response2])=>{
      dispatch({type: DELETE_TASK, payload:{id}});
    }))
    .catch(function (error) {
      console.log(error);
    });
  };
};
