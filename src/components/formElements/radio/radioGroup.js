import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { FormHelperText } from '@material-ui/core';

// Example Usage
// -----------------------------------
export default function RadioButtonsGroup({
  label,
  isBoolean,
  options = [{ value: '', label: '' }],
  onChange,
  name,
  currentIndex,
  validations,
}) {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event, name, currentIndex);
  };

  const renderOptions = () => {
    if (isBoolean) {
      return (
        <>
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </>
      );
    } else {
      return options.map((option, index) => (
        <FormControlLabel
          key={index}
          value={option.value}
          control={<Radio />}
          label={option.label}
        />
      ));
    }
  };
  return (
    <div className="radio-group-container">
      <FormControl
        component="fieldset"
        error={!validations.isValid}
        className="radio-group-fieldset"
      >
        <FormLabel component="legend" className="radio-group-legend">
          {label}
        </FormLabel>
        <RadioGroup
          aria-label={label}
          name={label}
          value={value}
          onChange={handleChange}
          className="radio-group"
        >
          {renderOptions()}
        </RadioGroup>
        {!validations.isValid && (
          <FormHelperText>{validations.message}</FormHelperText>
        )}
      </FormControl>
    </div>
  );
}
