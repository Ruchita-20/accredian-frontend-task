import React, { useState } from 'react';
import { Button, Modal, Box, TextField, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ReferralForm() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      referrerName: formData.get('referrerName'),
      referrerEmail: formData.get('referrerEmail'),
      refereeName: formData.get('refereeName'),
      refereeEmail: formData.get('refereeEmail'),
      message: formData.get('message'),
    };
    console.log(data);
  
    try {
      const response = await fetch('http://localhost:3001/api/referral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json();
      console.log('Success:', responseData);
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show error message to user)
    } finally {
      handleClose(); // Ensure modal closes regardless of success or failure
    }
  };
  
  return (
    <div>
      <Button variant="contained" onClick={handleOpen} sx={{ textTransform: 'capitalize', backgroundColor: '#1A73E8', color: 'white', '&:hover': { backgroundColor: '#0E47A1'}}} size="large">
        Refer Now
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box component="form" onSubmit={handleSubmit} sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Referral Form
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            name="referrerName"
            label="Referrer Name"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            name="referrerEmail"
            label="Referrer Email"
            type="email"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            name="refereeName"
            label="Referee Name"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            name="refereeEmail"
            label="Referee Email"
            type="email"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            name="message"
            label="Message"
            multiline
            rows={4}
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
