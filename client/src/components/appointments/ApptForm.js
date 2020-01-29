import React, { useState, useContext, useEffect } from 'react';
import ApptContext from '../../context/appt/apptContext';
import { KeyboardDateTimePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const ApptForm = () => {
  const apptContext = useContext(ApptContext);

  const {
    addAppointment,
    updateAppointment,
    clearCurrent,
    current
  } = apptContext;

  const [selectedDate, handleDateChange] = useState(new Date());
  const [open, setOpen] = React.useState(false);
  const [appointment, setAppointment] = useState({
    barber: '',
    phone: '',
    availability: '',
    confirmed: false
  });

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

  const { barber, phone, availability, confirmed } = appointment;

  const useStyles = makeStyles(theme => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2)
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    }
  }));

  const classes = useStyles();

  // const handleChange = event => {
  //   setBarber(event.target.value);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

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
      <Button className={classes.button} onClick={handleOpen}>
        Choose a Barber!
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Barber</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={barber}
          onChange={onChange}
          name="barber"
        >
          <MenuItem value={'Jay'}>Jay</MenuItem>
          <MenuItem value={'Melissa'}>Melissa</MenuItem>
          <MenuItem value={'Nicole'}>Nicole</MenuItem>
        </Select>
      </FormControl>

      {/* <input
        type="text"
        placeholder="Which Barber do you prefer?"
        name="barber"
        value={barber}
        onChange={onChange}
      /> */}
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
