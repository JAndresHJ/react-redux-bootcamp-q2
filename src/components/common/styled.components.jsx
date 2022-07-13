import { styled as MUIStyled } from '@mui/material/styles';
import styled from 'styled-components';

// Components
import Button from '@mui/material/Button';

export const StyledButton = MUIStyled(Button)(() => ({
  backgroundColor: '#203449',
  '&:hover': {
    backgroundColor: '#111823',
  },
}));

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
