import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { LoadingContainer } from './styled.components';

export const Loading = () => {
  return (
    <LoadingContainer>
      <CircularProgress size={70} />
    </LoadingContainer>
  );
};

export default Loading;
