import React from 'react';
import { useState,useRef,useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import './MobileAppBar.css';
import IconButton from '@mui/material/IconButton';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import pp from "../../assets/jpg/IMG20221025172200.jpg"
import { Avatar } from '@mui/material';

const MobileAppBar = () => {
  const [height,setHeight] = useState(0);
  const ref = useRef(null)
  useEffect(() => {
    setHeight(ref.current.clientHeight)
  })
  const Height = window.innerHeight;
  const pos = Height - height;
  console.log(pos)
  return (
  <div>
    <AppBar ref={ref} sx={{backgroundColor: '#FF570C !important', position: 'fixed', display:{xs:'flex',md:'none'},top:`${pos}px`}}>
        <Container maxWidth="xl">
            <Toolbar disableGutters sx={{justifyContent: 'space-around'}}>
            <IconButton>
                <ShoppingCartSharpIcon/>
            </IconButton>
            <IconButton sx={{ p: 0}}> {/* onClick={handleOpenUserMenu} copy that from ResponsiveAppBar if necessary */} 
                <Avatar alt="Remy Sharp" src={pp} />
            </IconButton>
            </Toolbar>
        </Container>
    </AppBar>
    </div>
  );
};

export default MobileAppBar;