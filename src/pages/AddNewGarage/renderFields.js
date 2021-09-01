import React from 'react';
import RadioButtonsGroup from '../../components/formElements/radio/radioGroup';
import CustomTextField from '../../components/formElements/textfield/textfield';
import { fieldTypes } from './fieldTypes';

const RenderFields = ({ modelBuffer, handleChange }) => {
  return modelBuffer.map((field, index) => {
    switch (field.fieldType) {
      case fieldTypes.text:
      case fieldTypes.textarea:
      case fieldTypes.number:
      case fieldTypes.multiselectbutton: {
        return (
          <CustomTextField
            key={index}
            {...field}
            currentIndex={index}
            onChange={handleChange}
            validations={field.validations}
            isMultiLine={field.fieldType === fieldTypes.textarea}
          />
        );
      }
      case fieldTypes.radio: {
        return (
          <RadioButtonsGroup
            key={index}
            label={field.label}
            isBoolean={field.fieldExtras.isBoolean}
            placeHolderText={field.placeHolderText}
            name={field.name}
            currentIndex={index}
            onChange={handleChange}
            validations={field.validations}
          />
        );
      }
      default:
        return null;
    }
  });
};

export default RenderFields;
