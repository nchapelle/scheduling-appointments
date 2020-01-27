import React, { useReducer } from 'react';
import axios from 'axios';
import ApptContext from './apptContext';
import apptReducer from './apptReducer';
import {
  ADD_APPT,
  UPDATE_APPT,
  GET_APPTS,
  DELETE_APPT,
  FILTER_APPTS,
  CLEAR_FILTER,
  SET_CURRENT,
  CLEAR_CURRENT,
  APPT_ERROR,
  CLEAR_APPTS
} from '../types';

const ApptState = props => {
  const initialState = {
    appointments: [],
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(apptReducer, initialState);

  // Get Appointments
  const getAppointments = async () => {
    try {
      const res = await axios.get('/api/appointments');

      dispatch({
        type: GET_APPTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: APPT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add Appointment
  const addAppointment = async appointment => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/appointments', appointment, config);

      dispatch({
        type: ADD_APPT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: APPT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Delete Appointment
  const deleteAppointment = async _id => {
    try {
      await axios.delete(`/api/appointments/${_id}`);

      dispatch({
        type: DELETE_APPT,
        payload: _id
      });
    } catch (err) {
      dispatch({
        type: APPT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Update Appointment
  const updateAppointment = async appointment => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(
        `/api/appointments/${appointment._id}`,
        appointment,
        config
      );

      dispatch({
        type: UPDATE_APPT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: APPT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Clear Appointments
  const clearAppointments = () => {
    dispatch({ type: CLEAR_APPTS });
  };

  // Set Current Appointment
  const setCurrent = appointment => {
    dispatch({ type: SET_CURRENT, payload: appointment });
  };

  // Clear Current Appointment
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Appointments
  const filterAppointments = text => {
    dispatch({ type: FILTER_APPTS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ApptContext.Provider
      value={{
        appointments: state.appointments,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        getAppointments,
        addAppointment,
        deleteAppointment,
        updateAppointment,
        clearAppointments,
        setCurrent,
        clearCurrent,
        filterAppointments,
        clearFilter
      }}
    >
      {props.children}
    </ApptContext.Provider>
  );
};

export default ApptState;
