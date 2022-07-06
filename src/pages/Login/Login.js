import React, { useState } from 'react';
import loginApi from '../../utils/loginApi';

// Componets
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FormContainer } from './Login.styled';
import { StyledButton } from '../../components/common/styled.components';

const Login = ({ setIsLoggedIn }) => {
  const [userValues, setUserValues] = useState({
    username: '',
    password: '',
  });

  const { username, password } = userValues;

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await loginApi(username, password);
      setIsLoggedIn(!!response);
    } catch (error) {
      console.error(error);
    }
  };

  const onChange = (event) => {
    setUserValues({
      ...userValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container component='main' maxWidth='sm'>
      <FormContainer>
        <Typography component='h1' variant='h5' fontWeight='bold'>
          Welcome to WizeStore!
        </Typography>
        <Box component='form' onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            label='Username'
            name='username'
            autoFocus
            onChange={onChange}
          />
          <TextField
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
