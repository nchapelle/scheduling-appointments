import React, { useContext, useRef, useEffect } from 'react';
import ApptContext from '../../context/appt/apptContext';

const ApptFilter = () => {
  const apptContext = useContext(ApptContext);
  const text = useRef('');

  const { filterAppointments, clearFilter, filtered } = apptContext;

  useEffect(() => {
      if (filtered === null) {
          text.current.value = '';
      }
  });

  const onChange = e => {
    if (text.current.value !== '') {
     filterAppointments(e.target.value);
    } else {
    clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Find Appointments"
        onChange={onChange}
      />
    </form>
  );
};

export default ApptFilter;
