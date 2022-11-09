import React from 'react';
import { useState,useEffect } from 'react';
import './MobileAppBar.css';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import pp from "../../assets/jpg/IMG20221025172200.jpg"
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const MobileAppBar = () => {
  const [value, setValue] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(()=>{
    window.addEventListener('resize', ()=>{
      setWidth(window.innerWidth)
    })
    return () => {
      window.removeEventListener('resize', ()=>{
        setWidth(window.innerWidth)
      });
    };
  })
  return (
    <Box sx={{ justifyContent: 'space-between'}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ backgroundColor: '#FF570C !important', position: 'fixed', display:{xs:'flex',md:'none'}, bottom:'0px', width:`${width}px`, justifyContent: 'space-around' }}
      >
        <BottomNavigationAction label="Favorites" icon={<ShoppingCartSharpIcon/>} />
        <BottomNavigationAction label="Nearby" icon={<Avatar alt="Remy Sharp" src={pp} />} />
      </BottomNavigation>
    </Box>
  );
};

export default MobileAppBar;