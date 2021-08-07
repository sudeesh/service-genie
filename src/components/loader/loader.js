import { CircularProgress } from '@material-ui/core';
import React from 'react';

function Loader() {
  return (
    <CircularProgress
      style={{
        position: 'absolute',
        top: '40%',
        left: '46%',
      }}
    />
  );
}

export default Loader;
