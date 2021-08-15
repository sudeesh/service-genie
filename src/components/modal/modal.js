import React from 'react';
import Modal from '@material-ui/core/Modal';

export default function SimpleModal({ open, handleClose, body }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {body}
    </Modal>
  );
}
