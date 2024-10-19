

import {
  ADD_TO_CART,
  CHECK_OUT,
  DELETE_PRODUCT,
  LOADED_PRODUCTS,
  LOADING_PRODUCTS,
  SENDING_PRODUCT,
  SENT_PRODUCT,
  LOADING_CAROUSERL,
  LOADED_CAROUSERL,
  LOADED_CARTPRODUCT,
  LOADING_CARTPRODUCT,
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
  LOADED_USER_PROFILE,
  LOADING_USER_PROFILE,
  LOADED_IS_AUTH,
  LOADING_IS_AUTH,
  LOADED_OWN_ALL_POST,
  LOADED_ALL_POST,
  LOADED_OTHER_USER_DATA,
  LOADED_OTHER_USER_POST_DATA,
  LOADED_P2P_MESSAGE_ALL_USERS,
  LOADED_MY_ROOMS,
  LOADED_MY_BALANCE,
  LOADED_MY_ALL_FRIEND_LIST,
  LOADED_ALL_ROOMS_DATA,
  LOADED_OPEN_CLOSE_SIDE_MENU,
  LOADED_HOST_AGENT,
  LOADED_RECHARGE_AGENT,
  LOADED_HOST_DATA,
  LOADED_RECHARGE_ACCOUNTS,
  LOADED_HOST_DETAILS_DATA,
  LOADED_GO_BACK_HOME,
  IS_IN_PIN_MODEL_LOADED,
} from '../actions/types';

const intialState = {
  sending: false,
  loading: true,
  products: [],
  product: null,
  shippingAddress: null,
  profileData: null,
  allOrderProducts: null,
  yourProfile: null,
  checkIsAuth: null,
  cartProducts: [],
  userProfile: null,
  isAuth: null,
  ownAllPost: [],
  allPost: [],
  otherUserLoadData: [],
  otherUserLoadPostData: [],
  P2PMessageAllUsersData: [],
  myRoomsData: [],
  myBalance: [],
  myAllFriendList: [],
  allRoomsData: [],
  openAndCloseSideBarMenu: false,
  hostAgentData: null,
  rechargeAgentData: null,
  hostData: null,
  hostDetailsData: null,
  rechargeData: null,
  goBackHome: false,
  isInPinModel: false,
};

export default (state = intialState, {payload, type}: any) => {
  switch (type) {
    case SENDING_PRODUCT:
      return {
        ...state,
        sending: true,
      };

    // .........................................................................................

    case LOADED_GO_BACK_HOME:
      return {
        ...state,
        goBackHome: payload,
        loading: false,
      };
    // .........................................................................................

    case LOADED_HOST_DETAILS_DATA:
      return {
        ...state,
        hostDetailsData: payload,
        loading: false,
      };
    // .........................................................................................

    case IS_IN_PIN_MODEL_LOADED:
      return {
        ...state,
        isInPinModel: payload,
        loading: false,
      };
    // .........................................................................................

    case LOADED_RECHARGE_ACCOUNTS:
      return {
        ...state,
        rechargeData: payload,
        loading: false,
      };

    // .........................................................................................

    case LOADED_HOST_DATA:
      return {
        ...state,
        hostData: payload,
        loading: false,
      };

    // .........................................................................................

    case LOADED_RECHARGE_AGENT:
      return {
        ...state,
        rechargeAgentData: payload,
        loading: false,
      };

    // .........................................................................................

    case LOADED_HOST_AGENT:
      return {
        ...state,
        hostAgentData: payload,
        loading: false,
      };

    // .........................................................................................

    case LOADED_OPEN_CLOSE_SIDE_MENU:
      return {
        ...state,
        openAndCloseSideBarMenu: payload,
        loading: false,
      };

    case LOADED_ALL_ROOMS_DATA:
      return {
        ...state,
        allRoomsData: payload,
        loading: false,
      };

    // .........................................................................................

    case LOADED_MY_ALL_FRIEND_LIST:
      return {
        ...state,
        myAllFriendList: payload,
        loading: false,
      };

    // .........................................................................................

    case LOADED_MY_BALANCE:
      return {
        ...state,
        myBalance: payload,
        loading: false,
      };

    // .........................................................................................

    case LOADED_MY_ROOMS:
      return {
        ...state,
        myRoomsData: payload,
        loading: false,
      };

    // .........................................................................................

    case LOADED_P2P_MESSAGE_ALL_USERS:
      return {
        ...state,
        P2PMessageAllUsersData: payload,
        loading: false,
      };

    // .........................................................................................

    case LOADED_OTHER_USER_DATA:
      return {
        ...state,
        otherUserLoadData: payload,
        loading: false,
      };

    case LOADED_OTHER_USER_POST_DATA:
      return {
        ...state,
        otherUserLoadPostData: payload,
        loading: false,
      };

    // .........................................................................................

    case LOADED_ALL_POST:
      return {
        ...state,
        allPost: payload,
        loading: false,
      };

    // .........................................................................................

    case LOADED_OWN_ALL_POST:
      return {
        ...state,
        ownAllPost: payload,
        loading: false,
      };

    // ..................... isAuth...................................

    case LOADING_IS_AUTH:
      return {
        ...state,
        loading: false,
      };

    case LOADED_IS_AUTH:
      return {
        ...state,
        isAuth: payload,
        loading: false,
      };

    // ..................... userProfile...................................

    case LOADING_USER_PROFILE:
      return {
        ...state,
        loading: false,
      };

    case LOADED_USER_PROFILE:
      return {
        ...state,
        userProfile: payload,
        loading: false,
      };

    // ........................................................

    case LOADING_PRODUCTS:
      return {
        ...state,
        loading: false,
      };
    // ........................................................

    case LOADING_CAROUSERL:
      return {
        ...state,
        loading: false,
      };
    // ........................................................

    case SENT_PRODUCT:
      return {
        ...state,
        sending: false,
        products: [payload, ...state.products],
        payload: payload,
      };
    //........................................................

    case CHECK_IS_AUTH_LOADED:
      return {
        ...state,
        checkIsAuth: payload,
        loading: false,
      };

    //........................................................

    case LOADED_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false,
      };

    //........................................................
    case LOADED_CAROUSERL:
      return {
        ...state,
        carouserl: payload,
        loading: false,
      };
    //........................................................

    // ..................... CARTPRODUCT...................................

    case LOADING_CARTPRODUCT:
      return {
        ...state,
        loading: false,
      };

    case LOADED_CARTPRODUCT:
      return {
        ...state,
        cartProducts: payload,
        loading: false,
      };

    // ..................... LoginSecurity...................................

    case LOADING_LoginSecurity:
      return {
        ...state,
        loading: false,
      };

    case LOADED_LoginSecurity:
      return {
        ...state,
        LoginSecurity: payload,
        loading: false,
      };

    // ..................... Orders...................................

    case LOADING_Orders:
      return {
        ...state,
        loading: false,
      };

    case LOADED_Orders:
      return {
        ...state,
        Orders: payload,
        loading: false,
      };

    // .....................YourProfile...................................

    case LOADING_YourProfile:
      return {
        ...state,
        loading: false,
      };

    case LOADED_YourProfile:
      return {
        ...state,
        yourProfile: payload,
        loading: false,
      };

    // .....................ReturnsProductList...................................

    case LOADING_ReturnsProductList:
      return {
        ...state,
        loading: false,
      };

    case LOADED_ReturnsProductList:
      return {
        ...state,
        ReturnsProductList: payload,
        loading: false,
      };

    // ..................... NewOrders...................................

    case LOADING_NewOrders:
      return {
        ...state,
        loading: false,
      };

    case LOADED_NewOrders:
      return {
        ...state,
        NewOrders: payload,
        loading: false,
      };

    // ..................... CompleteOrders...................................

    case LOADING_CompleteOrders:
      return {
        ...state,
        loading: false,
      };

    case LOADED_CompleteOrders:
      return {
        ...state,
        CompleteOrders: payload,
        loading: false,
      };

    // .....................AllOrderProducts...................................

    case LOADING_AllOrderProducts:
      return {
        ...state,
        loading: false,
      };

    case LOADED_AllOrderProducts:
      return {
        ...state,
        allOrderProducts: payload,
        loading: false,
      };

    // ..................... LOADING_CancelledProductList...................................

    case LOADING_CancelledProductList:
      return {
        ...state,
        loading: false,
      };

    case LOADED_CancelledProductList:
      return {
        ...state,
        CancelledProductList: payload,
        loading: false,
      };

    // ..................... Shipping Address...................................

    case LOADING_ShippingAddress:
      return {
        ...state,
        loading: false,
      };

    case LOADED_ShippingAddress:
      return {
        ...state,
        shippingAddress: payload,
        loading: false,
      };

    // ..................... Accounts and Bulding Address...................................

    case LOADING_Accounts:
      return {
        ...state,
        loading: false,
      };

    case LOADED_Accounts:
      return {
        ...state,
        accounts: payload,
        loading: false,
      };

    // ..................... Profile and Bulding Address...................................

    case LOADING_Profile:
      return {
        ...state,
        loading: false,
      };

    case LOADED_Profile:
      return {
        ...state,
        profileData: payload,
        loading: false,
      };

    // ..................... ...................................

    case CHECK_OUT:
      return {
        ...state,
        cartProducts: [],
        products: payload,
      };

    default:
      return state;
  }
};
