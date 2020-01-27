import React, { useState, useContext, useEffect } from 'react';
import ApptContext from '../../context/appt/apptContext';

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
        date: '',
        availability: '',
        confirmed: false
      });
    }
  }, [apptContext, current]);

  const [appointment, setAppointment] = useState({
    barber: '',
    phone: '',
    date: '',
    availability: '',
    confirmed: false
  });
  const { barber, phone, date, availability, confirmed } = appointment;

  const onChange = e =>
    setAppointment({ ...appointment, [e.target.name]: e.target.value });

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
      <input
        type="text"
        placeholder="Which Date Works Best for you?"
        name="date"
        value={date}
        onChange={onChange}
      />

      <input
        type="text"
        placeholder="What Time is Good for you?"
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
