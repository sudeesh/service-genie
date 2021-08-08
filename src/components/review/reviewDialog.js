import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import {
  colors,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";

const ReviewDialog = (props) => {
  const { status, onSubmit, onCancel } = props;
  const [value, setValue] = React.useState({});

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  console.log("value", value);

  return (
    <Dialog
      open={status}
      aria-labelledby="max-width-dialog-title"
      className="custom-dialog"
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="max-width-dialog-title">
        <b>Write a review</b>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <p>
            <TextField
              id="Name"
              label="Name"
              style={{ width: "100%" }}
              onChange={handleChange}
              name="userName"
            />
          </p>
          <p>
            <TextField
              id="Description"
              label="Description"
              multiline
              rows={4}
              style={{ width: "100%" }}
              onChange={handleChange}
              name="Description"
            />
          </p>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={onCancel}>
          Close
        </Button>
        <Button color="primary" onClick={onSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReviewDialog;
