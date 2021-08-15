import React from 'react';
import TextField from '@material-ui/core/TextField';

function CustomTextField({
  label,
  placeHolderText,
  fieldType,
  onChange,
  name,
  currentIndex,
  validations,
  value,
  isMultiLine,
}) {
  const handleChange = (event) => {
    onChange(event, name, currentIndex);
  };
  return (
    <div className="text-container">
      <TextField
        error={!validations?.isValid}
        label={label}
        helperText={placeHolderText}
        type={fieldType}
        onChange={handleChange}
        value={value}
        multiline={isMultiLine}
        {...(isMultiLine && { rows: '3' })}
        inputProps={{
          style: {
            fontSize: 14,
          },
        }} // font size of input text.
        InputLabelProps={{
          style: {
            fontSize: 14,
          },
        }} // font size of input label.
      />
      {!validations?.isValid && (
        <span className="error__text--red">{validations?.message}</span>
      )}
    </div>
  );
}

export default CustomTextField;
