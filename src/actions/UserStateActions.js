import {
    SET_USER_DETAILS,
    USER_LOGOUT,
  } from '../constants/action-constants';
  
  export const setUserDetails = (user)=>({
    type : SET_USER_DETAILS,
    user,
  })
  
  export const userLogout = ( ) => ({
    type: USER_LOGOUT,
  });