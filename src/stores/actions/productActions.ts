import {
  LOADED_SHOW_CUSTOM_DRAWER,
} from './types';



// ........................... Load LoginSecurity...........................................

export const loadMyRechargeData = (data:any) => async (dispatch: any) => {
  
      dispatch({type: LOADED_SHOW_CUSTOM_DRAWER, payload: data});
   
    
};

export const loadAppUsedUserStastus = (data:any) => async (dispatch: any) => {
  
      dispatch({type: LOADED_SHOW_CUSTOM_DRAWER, payload: data});
   
    
};

