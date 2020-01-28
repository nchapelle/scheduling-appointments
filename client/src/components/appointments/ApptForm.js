import React, { useState, useContext, useEffect } from 'react';
import ApptContext from '../../context/appt/apptContext';
import { KeyboardDateTimePicker } from '@material-ui/pickers';

const ApptForm = () => {
  const apptContext = useContext(ApptContext);

  const {
    addAppointment,
    updateAppointment,
    clearCurrent,
    current
  } = apptContext;

  const [selectedDate, handleDateChange] = useState(new Date());

  useEffect(() => {
    if (current !== null) {
      setAppointment(current);
    } else {
      setAppointment({
        barber: '',
        phone: '',
        availability: '',
        confirmed: false
      });
    }
  }, [apptContext, current]);

  const [appointment, setAppointment] = useState({
    barber: '',
    phone: '',
    availability: '',
    confirmed: false
  });

  const { barber, phone, availability, confirmed } = appointment;

  const onChange = e =>
    setAppointment({ ...appointment, [e.target.name]: e.target.value });

  const setDate = date => {
    setAppointment({ ...appointment, availability: date });
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
      <h2 className="text-primary" style={{ paddingTop: '18px' }}>
        {current ? 'Edit Appointment' : 'Add Appointment'}
      </h2>

      <input
        type="text"
        placeholder="Which Barber do you prefer?"
        name="barber"
        value={barber}
        onChange={onChange}
      />
      <input type="hidden" name="availability" value={availability} />
      <input type="hidden" name="confirmed" value={confirmed} />

      <KeyboardDateTimePicker
        value={selectedDate}
        label="What time is best for you?"
        showTodayButton
        disablePast
        format="yyyy/MM/dd HH:mm"
        onChange={async date => {
          handleDateChange(date);
          setDate(date);
        }}
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
