import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#EEF5FF" }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="h6" component="div" sx={{ color: 'black', textAlign: 'center', marginRight: '20px' }}>
            Navigate your ideal career path with tailored expert advice
          </Typography>
          <Typography variant="h6" component="div" sx={{ color: '#1A73E8', textAlign: 'center' }}>
            Contact Expert
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
