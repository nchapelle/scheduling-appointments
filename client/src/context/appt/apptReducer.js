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
  
export default (state, action) => {
    switch (action.type) {
      case GET_APPTS:
        return {
          ...state,
          appointments: action.payload,
          loading: false
        };
      case ADD_APPT:
        return {
          ...state,
          appointments: [action.payload, ...state.appointments],
          loading: false
        };
      case UPDATE_APPT:
        return {
          ...state,
          appointments: state.appointments.map(appointment =>
            appointment._id === action.payload._id ? action.payload : appointment
          ),
          loading: false
        };
      case DELETE_APPT:
        return {
          ...state,
          appointments: state.appointments.filter(
            appointment => appointment._id !== action.payload
          ),
          loading: false
        };
      case CLEAR_APPTS:
        return {
          ...state,
          appointments: null,
          filtered: null,
          error: null,
          current: null
        };
      case SET_CURRENT:
        return {
          ...state,
          current: action.payload
        };
      case CLEAR_CURRENT:
        return {
          ...state,
          current: null
        };
      case FILTER_APPTS:
        return {
          ...state,
          filtered: state.appointments.filter(appointment => {
            const regex = new RegExp(`${action.payload}`, 'gi');
            return appointment.barber.match(regex) || appointment.date.match(regex);
          })
        };
      case CLEAR_FILTER:
        return {
          ...state,
          filtered: null
        };
      case APPT_ERROR:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };