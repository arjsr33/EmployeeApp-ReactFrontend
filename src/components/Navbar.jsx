import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography, CssBaseline, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 

export default function Navbar() {
  const theme = useTheme();

  return (
    <div>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: theme.palette.success.main, height: '100px', justifyContent: 'center' }}>
          <Toolbar>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <img src={logo} alt="logo" style={{ height: '60px', marginRight: '10px', borderRadius: '30px' }} />
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                Employee App
              </Typography>
            </Box>
            <Button
              component={Link}
              to="/"
              sx={{
                color: theme.palette.common.white,
                fontWeight: 'bold',
                mx: 2,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: theme.palette.grey[300],
                },
              }}
            >
              Dashboard
            </Button>
            <Button
              component={Link}
              to="/form"
              sx={{
                color: theme.palette.common.white,
                fontWeight: 'bold',
                mx: 2,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: theme.palette.grey[300],
                },
              }}
            >
              Employee Form
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
