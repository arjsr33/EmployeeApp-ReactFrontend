import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Image = 'https://t4.ftcdn.net/jpg/03/35/89/59/360_F_335895985_pAQMgJ1bh1V1bZEBELY7h8k0Eepsp4cV.webp';

export default function Form() {
  const [employee, setEmployee] = useState({
    name: '',
    designation: '',
    location: '',
    salary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee Data:', employee);
  };

  return (
    <Box component="main" sx={{ marginTop: '100px', marginLeft: '200px', display: 'flex', p: 3, height: 'calc(100vh - 80px)', width: '80vw' }}>
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box
          component="img"
          sx={{ height: 'auto', width: '100%', maxHeight: '100%', objectFit: 'cover', borderRadius: '10px' }}
          alt="Employee form image"
          src={Image}
        />
      </Box>
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ width: '80%' }}>
          <Typography variant="h4" gutterBottom>
            Registration Form
            <hr />
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              value={employee.name}
              onChange={handleChange}
              variant="filled"
              fullWidth
              margin="normal"
            />
            <TextField
              required
              id="designation"
              name="designation"
              label="Designation"
              value={employee.designation}
              onChange={handleChange}
              variant="filled"
              fullWidth
              margin="normal"
            />
            <TextField
              required
              id="location"
              name="location"
              label="Location"
              value={employee.location}
              onChange={handleChange}
              variant="filled"
              fullWidth
              margin="normal"
            />
            <TextField
              required
              id="salary"
              name="salary"
              label="Salary"
              value={employee.salary}
              onChange={handleChange}
              variant="filled"
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
