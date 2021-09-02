import React, { useEffect, useState } from 'react';
import { usePosition } from '../../customHooks/usePosition';
import { bufferValues } from './bufferModel';
import { makeStyles } from '@material-ui/core/styles';
import './addnewgarage.scss';
import { Button } from '@material-ui/core';
import { createNewGarage } from '../../services/services';
import SimpleModal from '../../components/modal/modal';
import ImageUpload from '../../components/imageUpload/imageUpload';
import RenderFields from './renderFields';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  modalPaper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    fontFamily: 'AvenirLight',
  },
  modalButton: {
    background: '#eea44d',
  },
}));

function AddNewGarage() {
  const classes = useStyles();

  const [modelBuffer, setModelBuffer] = useState(bufferValues);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleChange = (e, path, index) => {
    const { value } = e.target;
    const data = [...modelBuffer];
    data[index].value = value;
    data[index].validations.isValid = true;
    setModelBuffer(data);
  };

  const position = usePosition();

  const getPosition = {
    latitude: position.latitude,
    longitude: position.longitude,
  };

  useEffect(() => {
    if (position.error) {
      setIsModalOpen(false);
    }
  }, [position, isModalOpen]);

  const saveForm = async (formData) => {
    await createNewGarage(formData).then((res) => {
      console.log(res);
      handleReset();
    });
  };

  const handleSave = () => {
    let getBuffer = [...modelBuffer];
    if (position.error !== null) {
      setIsModalOpen(true);
    }
    if (getBuffer.every((i) => i.value !== '')) {
      const payload = getBuffer.reduce((acc, next) => {
        return {
          ...acc,
          [next.name]: next.value,
        };
      }, {});
      saveForm({
        ...payload,
        ...getPosition,
      });
    } else {
      getBuffer = getBuffer.map((field) => {
        if (field.value === '') {
          field.validations.isValid = false;
        } else {
          field.validations.isValid = true;
        }
        return field;
      });
      setModelBuffer(getBuffer);
    }
  };

  const handleReset = () => {
    let getBuffer = [...modelBuffer];

    getBuffer = getBuffer.map((field) => {
      field.value = '';
      field.validations.isValid = true;
      return field;
    });

    setModelBuffer(getBuffer);
  };

  const modalBody = (
    <div className={classes.modalPaper}>
      <h2 id="simple-modal-title">Allow Geolocation</h2>
      <p id="simple-modal-description">
        If you do not allow we cannot proceed with the form
      </p>
      <Button
        className={classes.modalButton}
        onClick={() => setIsModalOpen(false)}
      >
        Accept
      </Button>
    </div>
  );

  const handleImageUpload = (image) => {
    const getBuffer = [...modelBuffer];
    getBuffer.push({
      name: 'image',
      value: image,
      validations: {
        isValid: true,
      },
    });
    setModelBuffer(getBuffer);
  };

  return (
    <div className="addnewgarage-container">
      <h3>Add New Garage</h3>

      <form className={classes.root} noValidate autoComplete="off">
        <RenderFields handleChange={handleChange} modelBuffer={modelBuffer} />
      </form>
      <ImageUpload cardName="Input Image" onChange={handleImageUpload} />
      <div>
        <Button onClick={handleSave}>Save</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
      <SimpleModal
        open={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        body={modalBody}
      />
    </div>
  );
}

export default AddNewGarage;
