import React from 'react';
import Appointments from '../appointments/Appointments';
import ApptForm from '../appointments/ApptForm';
import ApptFilter from '../appointments/ApptFilter';

const Scheduling = () => {
  return (
    <div className="grid-2">
      <div>
        <ApptForm />
      </div>
      <div>
        <ApptFilter />
        <Appointments />
      </div>
    </div>
  );
};
export default Scheduling;
