import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ResponsiveAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 ,margin:'0 30px', marginBottom:'20px'}}>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: '20px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="Logo" style={{ height: 36, marginRight: 20 }} />
            <Button variant="contained" sx={{ backgroundColor: '#1A73E8', color: 'white', '&:hover': { backgroundColor: '#0E47A1' } }} endIcon={<KeyboardArrowDownIcon />} onClick={handleMenuOpen}>
              Courses
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              onClick={handleMenuClose}
              PaperProps={{
                elevation: 0,
              }}
            >
              <MenuItem onClick={handleMenuClose}>
                <Typography variant="body1">Refer & Earn</Typography>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Typography variant="body1">Resources</Typography>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Typography variant="body1">About us</Typography>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Button variant="contained" sx={{ backgroundColor: '#94A3B8', color: 'black', '&:hover': { backgroundColor: '#CAD5E3' } }} component="a" href="https://accredian.com/login" target="_blank" rel="noopener noreferrer">
                  Login
                </Button>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Button variant="contained" sx={{ backgroundColor: '#1A73E8', color: 'white', '&:hover': { backgroundColor: '#0E47A1' } }} component="a" href="https://trial.accredian.com/" target="_blank" rel="noopener noreferrer">
                  Try For free
                </Button>
              </MenuItem>
            </Menu>
          </Box>

          {/* Right side content */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '20px' }}>
            <Typography variant="h6" component="div" sx={{ fontFamily: 'Inter' }}>
              Refer & Earn
            </Typography>
            <Typography variant="h6" component="div" sx={{ fontFamily: 'Inter' }}>
              Resources
            </Typography>
            <Typography variant="h6" component="div" sx={{ fontFamily: 'Inter' }}>
              About us
            </Typography>
            <Button variant="contained" sx={{ backgroundColor: 'rgba(148, 163, 184, 0.2)', boxShadow: 'none', color: 'black', '&:hover': { backgroundColor: 'rgba(148, 163, 184, 0.5)' } }} component="a" href="https://accredian.com/login" target="_blank" rel="noopener noreferrer">
              Login
            </Button>

            <Button variant="contained" sx={{ backgroundColor: '#1A73E8', color: 'white', '&:hover': { backgroundColor: '#0E47A1'} }}  component="a" href="https://trial.accredian.com/" target="_blank" rel="noopener noreferrer">
              Try For free
            </Button>
          </Box>

          {/* Mobile Menu Icon (displayed on mobile only) */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
