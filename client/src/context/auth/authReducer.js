import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOG_OUT } from "../types";

export default (state, action) => {
  switch ((action.type)) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
        return {
            //spread state 
            ...state, 
            ...action.payload,
            isAuthenticated: true,
            loading: false, 
            user: action.payload
        };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOG_OUT:
        //add login fail / auth error / logout type
        return {
            ...state, 
            token: null, 
            isAuthenticated: false, 
            loading: false, 
            user: null, 
        };
    default:
      return state;
  }
};
