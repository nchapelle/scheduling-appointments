import React, { useContext, useEffect } from 'react';
import Appointments from '../appointments/Appointments';
import ApptForm from '../appointments/ApptForm';
import ApptFilter from '../appointments/ApptFilter';
import AuthContext from '../../context/auth/authContext';

const Scheduling = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
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
