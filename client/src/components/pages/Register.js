import React, { useState, useContext, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://nolanchapelle.com/">
        Nolan Chapelle
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignUp = props => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  // once this is true, it will reroute
  useEffect(() => {
    if (isAuthenticated) props.history.push('/');

    if (error === 'Email Has already Been Used') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
    subcribed: false
  });

  const { firstName, lastName, email, password, password2, subcribed } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      password === ''
    ) {
      setAlert('All fields are required.', 'danger');
    } else if (password.length < 6) {
      setAlert('Password must be longer than 6 characters.', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords must match.', 'danger');
    } else {
      register({
        firstName,
        lastName,
        email,
        password,
        password2,
        subcribed
      });
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                //state goes here value= {name of state}
                onChange={onChange}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={firstName}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={onChange}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={onChange}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={onChange}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={onChange}
                variant="outlined"
                required
                fullWidth
                name="password2"
                label="Confirm Password"
                type="password"
                id="password2"
                autoComplete="confirm-password"
                value={password2}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                onChange={onChange}
                // I think this needs to be updated I'm not capturing the checkbox value
                name="subscribed"
                id="subscribed"
                control={<Checkbox value={subcribed} color="primary" />}
                label="Allow Communication via Email"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default SignUp;
