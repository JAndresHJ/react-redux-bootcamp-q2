import { styled as MUIStyled } from '@mui/material/styles';
import styled from 'styled-components';

// Components
import Card from '@mui/material/Card';

export const StyledCard = MUIStyled(Card)(() => ({
  maxWidth: 300,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  margin: 'auto',
  transition: '0.3s',
  boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
  '&:hover': {
    boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
  },
}));

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
