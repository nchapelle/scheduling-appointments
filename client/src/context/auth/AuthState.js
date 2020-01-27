import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOG_OUT,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_ERROR
} from '../types';
//LOADED USER, AUTH_ERROR, CLEAR_ERROR

//useEffect goes here "the logic for which routes we direct them to"

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  //Load USER
  

  //Register User
  const register = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/users', formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
      localStorage.removeItem('token');
    }
  };

  //Login User
  const login = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/auth', formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      localStorage.setItem('token', res.data.token);

      //we need to redirect on the front end here
    } catch (err) {
      console.log(err);
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      });
      localStorage.removeItem('token');
    }
  };

  //Logout User
  

  //Clear Errors



  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        login
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
