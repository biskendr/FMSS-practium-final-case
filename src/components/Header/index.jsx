import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  MenuItem,
  Container,
  Menu,
  IconButton,
  Typography,
  Toolbar,
  Box,
  AppBar,
} from '@mui/material';
import navigations from '../../json/navigations.json';
import navbarIcons from '../../json/navbarIcons.json';

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navLinks = navigations.map(({ nav }) => (
    <MenuItem
      key={nav}
      component='nav'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <NavLink
        to={`/${nav}`}
        style={({ isActive }) => {
          return {
            textDecoration: 'none',
            backgroundColor: isActive && '#FADE4B',
            padding: '1rem',
            borderRadius: '15px',
            color: isActive ? 'black' : 'white',
            transition: 'all ease 0.5s',
          };
        }}
      >
        <Typography
          variant='h6'
          component='div'
          sx={{ flexGrow: 1, fontWeight: 'bold' }}
        >
          {nav.toLocaleUpperCase()}
        </Typography>
      </NavLink>
    </MenuItem>
  ));

  return (
    <AppBar position='static' color='primary'>
      <Container maxWidth='xl'>
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size='large'
              aria-label='hamburger-menu'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              {anchorElNav ? (
                <img src={navbarIcons[0]['openMenu']} alt='Menu Open' />
              ) : (
                <img src={navbarIcons[0]['closeMenu']} alt='Menu Close' />
              )}
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              PaperProps={{ sx: { background: 'black', width: '100%' } }}
            >
              {navLinks}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navLinks}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
