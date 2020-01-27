import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ApptContext from '../../context/appt/apptContext';

const ApptItem = ({ appointment }) => {
  const apptContext = useContext(ApptContext);
  const { deleteAppointment, setCurrent, clearCurrent } = apptContext;

  const onDelete = () => {
    deleteAppointment(_id);
    clearCurrent();
  };

  const { _id, barber, confirmed, date, availability, phone } = appointment;
  return (
    <div className="card bg-light" key={_id}>
      <h3 className="text-primary text-left">
        Barber: {barber}
        <span
          style={{ float: 'right' }}
          className={'badge' + (confirmed === true ? '-success' : '-danger')}
        >
          {confirmed === true ? 'Confirmed' : 'Awaiting Approval'}
        </span>
      </h3>

      <ul className="list">
        <li>
          <i className="fas fa-calendar-alt"></i> {date + '   ' + availability}
        </li>
        {phone && (
          <li>
            <i class="fas fa-phone"></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <div
          className="button btn btn-dark btn-sm"
          onClick={() => setCurrent(appointment)}
        >
          Edit
        </div>
        <div className="button btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </div>
      </p>
    </div>
  );
};

ApptItem.propTypes = {
  appointment: PropTypes.object.isRequired
};

export default ApptItem;
