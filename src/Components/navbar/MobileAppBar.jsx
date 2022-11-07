import React from 'react';
import { useState,useRef,useEffect } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import ReactDOM from 'react-dom/client'
import './MobileAppBar.css';
import IconButton from '@mui/material/IconButton';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import pp from "../../assets/jpg/IMG20221025172200.jpg"
import { Avatar } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const MobileAppBar = () => {
  const settings = ['Profile', 'Account', 'Logout'];
  const [height,setHeight] = useState(0);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const ref = useRef(null)
  useEffect(() => {
    setHeight(ref.current.clientHeight)
  })
  const Height = window.innerHeight;
  const pos = Height - height;
  console.log(pos)
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };
  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
  <div>
    <AppBar ref={ref} sx={{backgroundColor: '#FF570C !important', position: 'fixed', display:{xs:'flex',md:'none'},top:`${pos}px`}}>
        <Container maxWidth="xl">
            <Toolbar disableGutters sx={{justifyContent: 'space-around'}}>
            <IconButton>
                <ShoppingCartSharpIcon/>
            </IconButton>
            <IconButton sx={{ p: 0}} onClick={handleOpenUserMenu}> {/* onClick={handleOpenUserMenu} copy that from ResponsiveAppBar if necessary */} 
                <Avatar alt="Remy Sharp" src={pp} />
            </IconButton>
            </Toolbar>
            {/* <Box>
            <Menu
              sx={{ mt: '0' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'bottom',
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
            </Box> */}
        </Container>
    </AppBar>
    </div>
  );
};

export default MobileAppBar;