import { styled as MUIStyled } from '@mui/material/styles';
import styled from 'styled-components';

// Components
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const StyledButton = MUIStyled(Button)(() => ({
  color: 'white',
  backgroundColor: '#203449',
  borderRadius: 0,
  '&:hover': {
    backgroundColor: '#111823',
  },
}));

export const StyledInput = MUIStyled(TextField)(() => ({
  borderRadius: 0,
  backgroundColor: 'white',
  height: 50,
  '.MuiOutlinedInput-root': {
    borderRadius: 0,
  },
}));

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoadingContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 90vh;
`;
