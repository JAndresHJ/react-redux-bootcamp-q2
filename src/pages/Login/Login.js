import React, { useState } from 'react';
import { login } from '../../store';
import { useSelector, useDispatch } from 'react-redux';

// Componets
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Loading from '../../components/common/Loading';
import { FormContainer } from './Login.styled';
import {
  StyledButton,
  StyledInput,
} from '../../components/common/styled.components';

const Login = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const [userValues, setUserValues] = useState({
    username: '',
    password: '',
  });

  const { username, password } = userValues;
  const { error, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  /**
   * On submission the login thunk will be dispatched. If an error
   * happens an alert will be display with the message contained in
   * the rejectedValue.
   * @param {*} event
   */
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(login({ username, password })).unwrap();
    } catch (rejectedValue) {
      console.error(rejectedValue);
      setOpenAlert(true);
    }
  };

  /**
   * Manages the state value for both inputs, password
   * and username.
   * @param {*} event
   */
  const onChange = (event) => {
    setUserValues({
      ...userValues,
      [event.target.name]: event.target.value,
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Container component='main' maxWidth='sm'>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={openAlert}
        onClose={() => setOpenAlert(false)}
        autoHideDuration={3000}
      >
        <Alert severity='error' sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
      <FormContainer>
        <Typography component='h1' variant='h5' fontWeight='bold'>
          Welcome to WizeStore!
        </Typography>
        <Box component='form' onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
          <StyledInput
            margin='normal'
            required
            fullWidth
            label='Username'
            name='username'
            autoFocus
            onChange={onChange}
          />
          <StyledInput
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            onChange={onChange}
          />
          <StyledButton
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </StyledButton>
        </Box>
      </FormContainer>
    </Container>
  );
};

export default Login;
