import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import './ResponsiveAppBar.css'
import pp from "../../assets/jpg/IMG20221025172200.jpg"
const pages = ['Cycles', 'Accessories', 'About Us'];
const settings = ['Profile', 'Account', 'Logout'];


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  console.log(matches)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{backgroundColor: '#FF570C !important', position: 'fixed'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{justifyContent: 'space-between'}}>
		{/* add your logo here replacing adbicon */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: "'Montserrat', sans-serif",
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Ace Bikes
          </Typography>


          {/* add your logo here replacing adbicon */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: "'Montserrat', sans-serif",
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'center',
              margin: '0px'
            }}
          >
            Ace Bikes
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'flex-end', maxWidth:'75vw' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <p style={{margin: '0 1rem'}}>{page}</p>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <div className='end_icons'>
                <IconButton sx={{display:{ xs: 'none',md:'flex'}}}>
                  <ShoppingCartSharpIcon/>
                </IconButton>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, display:{ xs: 'none',md:'flex'} }}>
                  <Avatar alt="Remy Sharp" src={pp} />
                </IconButton>
            </div>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;





