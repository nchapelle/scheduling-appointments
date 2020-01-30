import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import ApptContext from '../../context/appt/apptContext';

const ApptItem = ({ appointment }) => {
  const apptContext = useContext(ApptContext);
  const { deleteAppointment, setCurrent, clearCurrent } = apptContext;

  const onDelete = () => {
    deleteAppointment(_id);
    clearCurrent();
  };

  const { _id, barber, confirmed, availability, phone } = appointment;
  return (
    <div className="card bg-light" key={_id}>
      <h3 className="text-primary text-left">
        Barber: {barber}
        <span
          style={{ float: 'right' }}
          className={
            'badge badge' + (confirmed === true ? '-success' : '-danger')
          }
        >
          {confirmed === true ? 'Confirmed' : 'Awaiting Approval'}
        </span>
      </h3>

      <ul className="list">
        <li>
          <i className="fas fa-calendar-alt"></i> {availability}
        </li>
        {phone && (
          <li>
            <i className="fas fa-phone"></i> {phone}
          </li>
        )}
      </ul>
      <Fragment>
        <div
          className="button btn btn-dark btn-sm"
          onClick={() => setCurrent(appointment)}
        >
          Edit
        </div>
        <div className="button btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </div>
      </Fragment>
    </div>
  );
};

ApptItem.propTypes = {
  appointment: PropTypes.object.isRequired
};

export default ApptItem;
