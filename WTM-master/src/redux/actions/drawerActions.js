import {CLOSE_DRAWER, OPEN_DRAWER } from '../types';

export const closeDrawer = () => {
  return (dispatch) => {
    dispatch({
        type: CLOSE_DRAWER
    });
  }
}

export const openDrawer = () => {
  return (dispatch) => {
    dispatch({
        type: OPEN_DRAWER
    });
  }
}
