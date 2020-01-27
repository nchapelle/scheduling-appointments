import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ApptContext from '../../context/appt/apptContext';
import ApptItem from './ApptItem';
import Spinner from '../layout/Spinner';

const Appointments = () => {
  const apptContext = useContext(ApptContext);
  const { appointments, filtered, getAppointments, loading } = apptContext;

  useEffect(() => {
    getAppointments();
    //eslint-disable-next-line
  }, []);
  if (appointments.length === 0) {
    return <h4>Use the form above to schedule an appointment.</h4>;
  }

  return (
    <Fragment>
      {appointments !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(appointment => (
                <CSSTransition
                  key={appointment._id}
                  timeout={500}
                  classNames="item"
                >
                  <ApptItem appointment={appointment} />
                </CSSTransition>
              ))
            : appointments.map(appointment => (
                <CSSTransition
                  key={appointment._id}
                  timeout={500}
                  classNames="item"
                >
                  <ApptItem appointment={appointment} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Appointments;
