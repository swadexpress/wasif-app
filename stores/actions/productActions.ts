import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {returnErrors} from './dist/errorActions';
import {ADD_TO_CART, CHECK_OUT} from './dist/types';
import {
  AllDispatchProp,
  API_URI,
  CLEAR_ERRORS,
  DELETE_PRODUCT,
  LOADED_PRODUCTS,
  LOADING_PRODUCTS,
  SENT_PRODUCT,
  LOADED_CAROUSERL,
  LOADING_CAROUSERL,
  LOADING_CARTPRODUCT,
  LOADED_CARTPRODUCT,
  LOADING_ShippingAddress,
  LOADED_ShippingAddress,
  ShippingAddress_FAIL,
  LOADING_Profile,
  LOADED_Profile,
  Profile_FAIL,
  LOADING_Accounts,
  LOADED_Accounts,
  Accounts_FAIL,
  LOADING_AllOrderProducts,
  LOADED_AllOrderProducts,
  AllOrderProduct_FAIL,
  LOADING_CancelledProductList,
  LOADED_CancelledProductList,
  CancelledProductList_FAIL,
  LOADING_CompleteOrders,
  LOADED_CompleteOrders,
  CompleteOrders_FAIL,
  LOADING_NewOrders,
  LOADED_NewOrders,
  NewOrders_FAIL,
  LOADING_ReturnsProductList,
  LOADED_ReturnsProductList,
  NewOrders_ReturnsProductList,
  LOADING_YourProfile,
  LOADED_YourProfile,
  YourProfile_FAIL,
  LOADING_Orders,
  LOADED_Orders,
  Orders_FAIL,
  LOADING_LoginSecurity,
  LOADED_LoginSecurity,
  LoginSecurity_FAIL,
  CHECK_IS_AUTH_LOADED,
  LOADING_USER_PROFILE,
  LOADED_USER_PROFILE,
  LOADED_IS_AUTH,
  LOADING_IS_AUTH,
  LOADING_OWN_ALL_POST,
  LOADED_OWN_ALL_POST,
  LOADING_ALL_POST,
  LOADED_ALL_POST,
  LOADED_OTHER_USER_DATA,
  LOADED_OTHER_USER_POST_DATA,
  LOADED_P2P_MESSAGE_ALL_USERS,
  LOADING_P2P_MESSAGE_ALL_USERS,
  LOADED_MY_ROOMS,
  LOADING_MY_ROOMS,
  LOADED_MY_BALANCE,
  LOADING_MY_BALANCE,
  LOADED_MY_ALL_FRIEND_LIST,
  LOADING_MY_ALL_FRIEND_LIST,
  LOADED_ALL_ROOMS_DATA,
  LOADED_OPEN_CLOSE_SIDE_MENU,
  LOADING_ALL_ROOMS_DATA,
  LOADED_HOST_AGENT,
  LOADING_HOST_AGENT,
  LOADED_RECHARGE_AGENT,
  LOADING_RECHARGE_AGENT,
  LOADED_HOST_DATA,
  LOADING_HOST_DATA,
  LOADED_RECHARGE_ACCOUNTS,
  LOADING_RECHARGE_ACCOUNTS,
  LOADING_HOST_DETAILS_DATA,
  LOADED_HOST_DETAILS_DATA,
  LOADED_GO_BACK_HOME,
  IS_IN_PIN_MODEL_LOADED,
} from './types';

import {endpointdajngobackend} from '../../profileconstants';
import {endpoint} from '../../liveconstants';
import {endpointshop} from '../../shopapiconstants';

// ........................... Load LoginSecurity...........................................

export const loadMyRechargeData = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_RECHARGE_ACCOUNTS, payload: null});
  const userId = await AsyncStorage.getItem('@myUserId');
  const data = {
    userId: userId,
  };
  axios
    .post(`${endpointdajngobackend}/home/MyRechargeView/`, data)
    .then(res => {
      // console.log(res.data,'LOADED_MY_BALANCELOADED_MY_BALANCELOADED_MY_BALANCE')
      dispatch({type: LOADED_RECHARGE_ACCOUNTS, payload: res.data});
    })
    .catch(err => {
      dispatch({type: LOADED_RECHARGE_ACCOUNTS, payload: err});
    });
};

// ........................... Load LoginSecurity...........................................

export const loadHostData = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_HOST_DATA, payload: null});
  const userId = await AsyncStorage.getItem('@myUserId');
  const data = {
    userId: userId,
  };
  axios
    .post(`${endpointdajngobackend}/home/HostDataView/`, data)
    .then(res => {
      // console.log(res.data,'LOADED_MY_BALANCELOADED_MY_BALANCELOADED_MY_BALANCE')
      dispatch({type: LOADED_HOST_DATA, payload: res.data});
    })
    .catch(err => {
      dispatch({type: LOADED_HOST_DATA, payload: err});
    });
};
// ........................... Load LoginSecurity...........................................

export const loadHostDetailsData = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_HOST_DETAILS_DATA, payload: null});
  const userId = await AsyncStorage.getItem('@myUserId');
  const data = {
    userId: userId,
  };
  axios
    .post(`${endpointdajngobackend}/home/HostDetailsDataView/`, data)
    .then(res => {
      // console.log(res.data,'LOADED_MY_BALANCELOADED_MY_BALANCELOADED_MY_BALANCE')
      dispatch({type: LOADED_HOST_DETAILS_DATA, payload: res.data});
    })
    .catch(err => {
      dispatch({type: LOADED_HOST_DETAILS_DATA, payload: err});
    });
};

// ........................... Load LoginSecurity...........................................

export const loadRechargeAgent = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_RECHARGE_AGENT, payload: null});
  const userId = await AsyncStorage.getItem('@myUserId');
  const data = {
    userId: userId,
  };
  axios
    .post(`${endpointdajngobackend}/home/RechargeAgentView/`, data)
    .then(res => {
      // console.log(res.data,'LOADED_MY_BALANCELOADED_MY_BALANCELOADED_MY_BALANCE')
      dispatch({type: LOADED_RECHARGE_AGENT, payload: res.data.data});
    })
    .catch(err => {
      dispatch({type: LOADED_RECHARGE_AGENT, payload: err});
    });
};

// ........................... Load LoginSecurity...........................................

export const loadHostAgent = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_HOST_AGENT, payload: null});
  const userId = await AsyncStorage.getItem('@myUserId');
  const data = {
    userId: userId,
  };
  axios
    .post(`${endpointdajngobackend}/home/HostAgentsView/`, data)
    .then(res => {
      // console.log(res.data,'LOADED_MY_BALANCELOADED_MY_BALANCELOADED_MY_BALANCE')
      dispatch({type: LOADED_HOST_AGENT, payload: res.data.data});
    })
    .catch(err => {
      dispatch({type: LOADED_HOST_AGENT, payload: err});
    });
};

// ........................... Load LoginSecurity...........................................
export const handelOpenCloseSideMenu =
  data => async (dispatch: AllDispatchProp) => {
    console.log(data, 'data...');

    dispatch({type: LOADED_OPEN_CLOSE_SIDE_MENU, payload: data});
  };
// ........................... Load LoginSecurity...........................................
export const handelGoBackHome = data => async (dispatch: AllDispatchProp) => {
  console.log(data, 'data...');

  dispatch({type: LOADED_GO_BACK_HOME, payload: data});
};

// ........................... Load LoginSecurity...........................................

export const loadAllRooms = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_ALL_ROOMS_DATA, payload: null});
  const myUserId = await AsyncStorage.getItem('@myUserId');
  const data = {
    myUserId: myUserId,
  };
  axios
    .post(`${endpoint}/all-rooms-view`, data)
    .then(res => {
      // console.log(res.data,'LOADED_MY_BALANCELOADED_MY_BALANCELOADED_MY_BALANCE')
      dispatch({type: LOADED_ALL_ROOMS_DATA, payload: res.data.serverAllRooms});
    })
    .catch(err => {
      dispatch({type: LOADED_ALL_ROOMS_DATA, payload: err});
    });
};

// ........................... Load LoginSecurity...........................................

export const loadMyBalance = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_MY_BALANCE, payload: null});
  const myUserId = await AsyncStorage.getItem('@myUserId');
  const data = {
    myUserId: myUserId,
  };
  axios
    .post(`${endpoint}/my-balance-view`, data)
    .then(res => {
      // console.log(res.data,'LOADED_MY_BALANCELOADED_MY_BALANCELOADED_MY_BALANCE')
      dispatch({type: LOADED_MY_BALANCE, payload: res.data});
    })
    .catch(err => {
      dispatch({type: LOADED_MY_BALANCE, payload: err});
    });
};

// ........................... Load LoginSecurity...........................................

export const loadMyRooms = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_MY_ROOMS, payload: null});
  const myUserId = await AsyncStorage.getItem('@myUserId');
  const data = {
    user_id: myUserId,
  };


  axios
    .post(`${endpointdajngobackend}/chat/MyRoomsView/`, data)
    .then(res => {
      dispatch({type: LOADED_MY_ROOMS, payload: res?.data?.my_rooms_data});
    })
    .catch(err => {
      dispatch({type: LOADED_MY_ROOMS, payload: err});
    });
};

// ........................... Load LoginSecurity...........................................

export const loadMyAllFriendList = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_MY_ALL_FRIEND_LIST, payload: null});
  const myUserId = await AsyncStorage.getItem('@myUserId');

  const data = {
    myUserId: myUserId,
  };

  axios
    .post(`${endpointdajngobackend}/home/MyAllFriendListView/`, data)
    .then(res => {
      dispatch({
        type: LOADED_MY_ALL_FRIEND_LIST,
        payload: res.data.data,
      });
    })
    .catch(err => {
      dispatch({type: LOADED_MY_ALL_FRIEND_LIST, payload: err});
    });
};

// ........................... Load LoginSecurity...........................................

export const loadGetP2PMessageAllUsers =
  () => async (dispatch: AllDispatchProp) => {
    dispatch({type: LOADING_P2P_MESSAGE_ALL_USERS, payload: null});
    const myUserId = await AsyncStorage.getItem('@myUserId');

    const data = {
      myUserId: myUserId,
    };

    axios
      .post(`${endpointdajngobackend}/home/P2PMessageUniqueIdView/`, data)
      .then(res => {
        dispatch({
          type: LOADED_P2P_MESSAGE_ALL_USERS,
          payload: res.data.data,
        });
      })
      .catch(err => {
        dispatch({type: LOADED_P2P_MESSAGE_ALL_USERS, payload: err});
      });
  };

// ........................... Load LoginSecurity...........................................
export const loadOtherUserData =
  ({data}: {data: string}) =>
  async (dispatch: AllDispatchProp) => {
    dispatch({type: LOADED_OTHER_USER_DATA, payload: data});
  };

export const loadOtherUserPostData =
  ({data}: {data: string}) =>
  async (dispatch: AllDispatchProp) => {
    dispatch({type: LOADED_OTHER_USER_POST_DATA, payload: data});
  };

// ........................... LOADED_ALL_POST...........................................

export const loadAllPost = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_ALL_POST, payload: null});
  const token = await AsyncStorage.getItem('@user_token');
  axios({
    method: 'GET',
    url: `${endpointdajngobackend}/home/PostView/`,

    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => {
      dispatch({type: LOADED_ALL_POST, payload: res.data});
    })
    .catch(_err => {
      dispatch({type: LOADED_ALL_POST, payload: _err});

      // dispatch({type: LOADED_ALL_POST, payload: ''});
    });
};

// ........................... LOADED_ALL_POST...........................................

export const loadOwnAllPost = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_OWN_ALL_POST, payload: null});
  const token = await AsyncStorage.getItem('@user_token');

  axios({
    method: 'GET',
    url: `${endpointdajngobackend}/home/OwnPostView/`,

    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => {
      dispatch({type: LOADED_OWN_ALL_POST, payload: res.data});
    })
    .catch(_err => {
      // dispatch({type: LOADED_ALL_POST, payload: ''});
    });
};

export const loadCheckIsAuth = () => async (dispatch: AllDispatchProp) => {
  const token = await AsyncStorage.getItem('@user_token');

  dispatch({
    type: CHECK_IS_AUTH_LOADED,
    payload: token,
  });
};
export const loadIsInPipMode= (status:any) => async (dispatch: AllDispatchProp) => {
 
//  console.log(status,'statusstatus')
  dispatch({
    type: IS_IN_PIN_MODEL_LOADED,
    payload: status,
  });


};

export const loadingidAuthorization =
  () => async (dispatch: AllDispatchProp) => {
    dispatch({type: LOADING_IS_AUTH, payload: null});

    const isAuth = await AsyncStorage.getItem('@isAuth');
    const data = [{isAuth: isAuth}];

    dispatch({type: LOADED_IS_AUTH, payload: data});
  };

// ........................... loading User Profile..........................................

export const loadingUserProfile = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_USER_PROFILE, payload: null});
  const token = await AsyncStorage.getItem('@user_token');
  const MyUserId = await AsyncStorage.getItem('@myUserId');
  // const MyUserId = 2

  // sendMessage(JSON.stringify(order));
  var data = {
    userId: MyUserId,
  };

  axios({
    method: 'POST',
    url: `${endpointdajngobackend}/home/UserProfileView/`,
    data,
    // headers: {
    //   'content-type': 'application/json',
    //   Authorization: `Bearer ${token}`,
    // },
  })
    .then(res => {
      // console.log(res.data.data, '.........dfsdf............');
      dispatch({type: LOADED_USER_PROFILE, payload: res.data.data[0]});
    })
    .catch(err => {
      dispatch({type: LOADED_USER_PROFILE, payload: ''});

      dispatch(returnErrors(err.response, err.response, 'LoginSecurity_FAIL'));
    });
};

// ........................... Load LoginSecurity...........................................

export const loadLoginSecurity = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_LoginSecurity, payload: null});
  const token = await AsyncStorage.getItem('@user_token');

  axios({
    method: 'GET',
    url: `${endpointshop}/LoginSecurityView/`,

    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => {
      dispatch({type: LOADED_LoginSecurity, payload: res.data.results});
    })
    .catch(err => {
      dispatch({type: LOADED_LoginSecurity, payload: ''});

      dispatch(returnErrors(err.response, err.response, 'LoginSecurity_FAIL'));
    });
};

// ........................... Load Orders...........................................

export const loadOrders = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_Orders, payload: null});
  const token = await AsyncStorage.getItem('@user_token');

  axios({
    method: 'GET',
    url: `${endpointshop}/YourOrdersView/`,

    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => {
      dispatch({type: LOADED_Orders, payload: res.data.results});
    })
    .catch(err => {
      dispatch({type: LOADED_Orders, payload: ''});

      dispatch(returnErrors(err.response, err.response, 'Orders_FAIL'));
    });
};

// ........................... Load YourProfile...........................................

export const loadYourProfile = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_YourProfile, payload: null});
  const token = await AsyncStorage.getItem('@user_token');

  axios({
    method: 'GET',
    url: `${endpointshop}/userprofile/`,

    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => {
      dispatch({type: LOADED_YourProfile, payload: res.data.results});
    })
    .catch(err => {
      dispatch({type: LOADED_YourProfile, payload: ''});

      dispatch(returnErrors(err.response, err.response, 'YourProfile_FAIL'));
    });
};

// ........................... Load   all ReturnsProductList...........................................

export const loadReturnsProductList =
  () => async (dispatch: AllDispatchProp) => {
    dispatch({type: LOADING_ReturnsProductList, payload: null});
    const token = await AsyncStorage.getItem('@user_token');

    axios({
      method: 'GET',
      url: `${endpointshop}/allreturnsorderproductslistview/`,

      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        dispatch({type: LOADED_ReturnsProductList, payload: res.data.results});
      })
      .catch(err => {
        dispatch({type: LOADED_ReturnsProductList, payload: ''});

        dispatch(
          returnErrors(
            err.response,
            err.response,
            'NewOrders_ReturnsProductList',
          ),
        );
      });
  };

// ........................... Load   all NewOrders...........................................

export const loadNewOrders = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_NewOrders, payload: null});
  const token = await AsyncStorage.getItem('@user_token');

  axios({
    method: 'GET',
    url: `${endpointshop}/allneworderproductslistview/`,

    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => {
      dispatch({type: LOADED_NewOrders, payload: res.data.results});
    })
    .catch(err => {
      dispatch({type: LOADED_NewOrders, payload: ''});

      dispatch(returnErrors(err.response, err.response, 'NewOrders_FAIL'));
    });
};

// ........................... Load   all CompleteOrders...........................................

export const loadCompleteOrders = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_CompleteOrders, payload: null});
  const token = await AsyncStorage.getItem('@user_token');

  axios({
    method: 'GET',
    url: `${endpointshop}/allcompletesorderproductslistview/`,

    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => {
      dispatch({type: LOADED_CompleteOrders, payload: res.data.results});
    })
    .catch(err => {
      dispatch({type: LOADED_CompleteOrders, payload: ''});

      dispatch(returnErrors(err.response, err.response, 'CompleteOrders_FAIL'));
    });
};

// ........................... Load   all CancelledProductList...........................................

export const loadCancelledProductList =
  () => async (dispatch: AllDispatchProp) => {
    dispatch({type: LOADING_CancelledProductList, payload: null});
    const token = await AsyncStorage.getItem('@user_token');

    axios({
      method: 'GET',
      url: `${endpointshop}/allcencelledorderproductslistview/`,

      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        dispatch({
          type: LOADED_CancelledProductList,
          payload: res.data.results,
        });
      })
      .catch(err => {
        dispatch({type: LOADED_CancelledProductList, payload: ''});

        dispatch(
          returnErrors(err.response, err.response, 'CancelledProductList_FAIL'),
        );
      });
  };

// ........................... Load All Order Products ...........................................

export const loadAllOrderProducts = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_AllOrderProducts, payload: null});
  const token = await AsyncStorage.getItem('@user_token');

  axios({
    method: 'GET',
    url: `${endpointshop}/allorderaroductslistView/`,

    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => {
      dispatch({type: LOADED_AllOrderProducts, payload: res.data.results});
    })
    .catch(err => {
      dispatch({type: LOADED_AllOrderProducts, payload: ''});

      dispatch(
        returnErrors(err.response, err.response, 'AllOrderProduct_FAIL'),
      );
    });
};

//* Load Amazon Products *//
export const loadProducts = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_PRODUCTS, payload: null});
  const token = await AsyncStorage.getItem('@user_token');

  //* Load products from url *//
  axios({
    method: 'GET',
    url: `${endpointshop}/products/`,
    headers: {
      'content-type': 'application/json',
      'x-amazon-token': token,
    },
  })
    .then(res => {
      dispatch({type: LOADED_PRODUCTS, payload: res.data.results});
    })
    .catch(err => {
      dispatch(
        returnErrors(
          err.response.data,
          err.response.status,
          'LOAD_PRODUCT_FAIL',
        ),
      );
    });
};

// ........................... Load Orbitplug Carousel ...........................................

//* Load Amazon Carousel *//
export const loadCarousel = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_CAROUSERL, payload: null});
  const token = await AsyncStorage.getItem('@user_token');
  //* Load products from url *//
  axios({
    method: 'GET',
    url: `${endpointshop}/carousel/`,

    headers: {
      'content-type': 'application/json',
      'x-amazon-token': token,
    },
  })
    .then(res => {
      dispatch({type: LOADED_CAROUSERL, payload: res.data.results});
    })
    .catch(err => {
      dispatch(
        returnErrors(
          err.response.data,
          err.response.status,
          'LOAD_PRODUCT_FAIL',
        ),
      );
    });
};

// ........................... Load Orbitplug Carousel ...........................................

//* Load Amazon Carousel *//
export const loadCartProduct = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_CARTPRODUCT, payload: null});
  const token = await AsyncStorage.getItem('@user_token');

  axios({
    method: 'GET',
    url: `${endpointshop}/order-summary/`,

    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => {
      dispatch({type: LOADED_CARTPRODUCT, payload: res.data});
    })
    .catch(err => {
      dispatch({type: LOADED_CARTPRODUCT, payload: ''});

      dispatch(returnErrors(err.response, err.response, 'LOAD_PRODUCT_FAIL'));
    });
};

// ........................... Load Orbitplug Shipping Address ...........................................

//* Load Amazon Carousel *//
export const loadShippingAddress = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_ShippingAddress, payload: null});
  const token = await AsyncStorage.getItem('@user_token');

  axios({
    method: 'GET',
    url: `${endpointshop}/shippingaddresslistview/`,

    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => {
      dispatch({type: LOADED_ShippingAddress, payload: res.data.results});
    })
    .catch(err => {
      dispatch(
        returnErrors(err.response, err.response, 'ShippingAddress_FAIL'),
      );
    });
};

// ........................... Load Accounts Shipping Address ...........................................

//* Load Amazon Carousel *//
export const loadAccounts = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_Accounts, payload: null});
  const token = await AsyncStorage.getItem('@user_token');

  axios({
    method: 'GET',
    url: `${endpointshop}/AccountsView/`,

    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => {
      dispatch({type: LOADED_Accounts, payload: res.data.results});
    })
    .catch(err => {
      dispatch({type: LOADED_Accounts, payload: ''});

      dispatch(
        returnErrors(err.response, err.response, 'ShippingAddress_FAIL'),
      );
    });
};

// ........................... Load Orbitplug Profile Address ...........................................

//* Load Amazon Carousel *//
export const loadProfile = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_Profile, payload: null});
  const token = await AsyncStorage.getItem('@user_token');

  axios({
    method: 'GET',
    url: `${endpointshop}/userprofile/`,

    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => {
      dispatch({type: LOADED_Profile, payload: res.data.results});
    })
    .catch(err => {
      dispatch(returnErrors(err.response, err.response, 'Profile_FAIL'));
    });
};
