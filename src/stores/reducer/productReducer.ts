

import {
  LOADED_SHOW_CUSTOM_DRAWER,
} from '../actions/types';

const intialState = {
  sending: false,
  loading: true,
  showCustomDrawer: false,
};

export default (state = intialState, {payload, type}: any) => {
  switch (type) {
    case LOADED_SHOW_CUSTOM_DRAWER:
      return {
        ...state,
        showCustomDrawer:payload ,
      };

   

    default:
      return state;
  }
};
