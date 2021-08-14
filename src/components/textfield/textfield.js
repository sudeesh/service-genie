import React from 'react';
import TextField from '@material-ui/core/TextField';

function CustomTextField({ ...props }) {
  return (
    <div>
      <TextField
        error={props.error}
        id="standard-error-helper-text"
        label
        defaultValue="Hello World"
        helperText="Incorrect entry."
      />
    </div>
  );
}

export default CustomTextField;
