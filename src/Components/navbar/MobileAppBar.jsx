import React from 'react';
import { useState,useEffect } from 'react';
import './MobileAppBar.css';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import InfoIcon from '@mui/icons-material/Info';
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

  const pages = [
    {
      icon: <InfoIcon/>,
      label: 'About Us'
    },
    {
      icon: <PedalBikeIcon/>,
      label: 'Cycles'
    },
    {
      icon: <MiscellaneousServicesIcon/>,
      label: 'Accessories'
    },
    {
      icon: <ShoppingCartSharpIcon/>,
      label: 'Your Cart'
    },
    {
      icon: <Avatar alt="Remy Sharp" src={pp} />,
      label: 'Profile'
    }
  ];
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
        {pages.map(x=>{
          const {icon , label} = x;
          console.log(x)
          return(
            <BottomNavigationAction label={label} icon={icon} />
          );
        })}
      </BottomNavigation>
    </Box>
  );
};

export default MobileAppBar;