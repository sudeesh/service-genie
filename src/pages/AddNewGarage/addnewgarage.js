import React, { useState } from 'react';
import CustomTextField from '../../components/textfield/textfield';
import { usePosition } from '../../customHooks/usePosition';
import { bufferValues } from './bufferModel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function AddNewGarage() {
  const classes = useStyles();

  const [modelBuffer, setModelBuffer] = useState(bufferValues);
  const handleChange = (e, path) => {
    const { value } = e.target;
    const data = { ...modelBuffer };
    data[path].value = value;
    setModelBuffer(data);
  };

  const handleSave = () => {
    const payload = {
      lockPayload: {
        request: {
          stateId: modelBuffer.saveAs.value,
          name: modelBuffer.templateName.value,
        },
      },
    };
  };

  const position = usePosition();
  console.log('position :>> ', position);

  const renderFields = () => {
    return modelBuffer.map(() => {
      return <CustomTextField />;
    });
  };

  return (
    <div className="addnewgarage-container">
      <form className={classes.root} noValidate autoComplete="off">
        {renderFields()}
      </form>
    </div>
  );
}

export default AddNewGarage;
