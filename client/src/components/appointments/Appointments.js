import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ApptContext from '../../context/appt/apptContext';
import ApptItem from './ApptItem';

const Appointments = () => {
  const apptContext = useContext(ApptContext);
  const { appointments, filtered } = apptContext;
  if (appointments.length === 0) {
    return <h4>You can schedule appointments here.</h4>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(appointment => (
              <CSSTransition key={appointment._id} timeout={500} classNames="item">
                <ApptItem appointment={appointment} />
              </CSSTransition>
            ))
          : appointments.map(appointment => (
            <CSSTransition key={appointment._id} timeout={500} classNames="item">
            <ApptItem appointment={appointment} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Appointments;
