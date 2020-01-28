import React, { useState, useContext, useEffect } from 'react';
import ApptContext from '../../context/appt/apptContext';
import { KeyboardDatePicker } from '@material-ui/pickers';

const ApptForm = () => {
  const apptContext = useContext(ApptContext);

  const {
    addAppointment,
    updateAppointment,
    clearCurrent,
    current
  } = apptContext;

  useEffect(() => {
    if (current !== null) {
      setAppointment(current);
    } else {
      setAppointment({
        barber: '',
        phone: '',
        day: '',
        availability: '',
        confirmed: false
      });
    }
  }, [apptContext, current]);

  const [appointment, setAppointment] = useState({
    barber: '',
    phone: '',
    day: '',
    availability: '',
    confirmed: false
  });

  const [selectedDate, handleDateChange] = useState();

  const { barber, phone, day, availability, confirmed } = appointment;

  const onChange = e =>
    setAppointment({ ...appointment, [e.target.name]: e.target.value });

  const setDate = () => {
    setAppointment({ ...appointment, day: selectedDate });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addAppointment(appointment);
    } else {
      updateAppointment(appointment);
    }
  };
  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? 'Edit Appointment' : 'Add Appointment'}
      </h2>

      <input
        type="text"
        placeholder="Which Barber do you prefer?"
        name="barber"
        value={barber}
        onChange={onChange}
      />

      <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label="With keyboard"
        format="MM/dd/yyyy"
        value={selectedDate}
        InputAdornmentProps={{ position: 'start' }}
        onChange={async date => {
          await handleDateChange(date);
          setDate();
        }}
      />
      <input
        type="text"
        placeholder="When are you available?"
        name="availability"
        value={availability}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="What Phone Number can we reach you at?"
        name="phone"
        value={phone}
        onChange={onChange}
        minLength="10"
        maxLength="10"
      />
      <div>
        {/* NEED TO FIX FUNCTIONALITY HERE */}
        <input
          type="submit"
          value={current ? 'Update Appointment' : 'Add Appointment'}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-danger btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ApptForm;
