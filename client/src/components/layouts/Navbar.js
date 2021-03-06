import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ApptContext from '../../context/appt/apptContext';

export const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;
  const apptContext = useContext(ApptContext);
  const { clearAppointments } = apptContext;

  const onLogout = () => {
    logout();
    clearAppointments();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.firstName}</li>
      <li>
        <a href="/scheduling">
          <i className="fas fa-calendar-alt"></i>
          <span className="hide-sm"> Scheduling</span>
        </a>
      </li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-door-open"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-dark">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Webbs Barber Shop',
  icon: 'fas fa-cut'
};

export default Navbar;
