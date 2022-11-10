import React from 'react';
import { useState,useEffect } from 'react';
import './MobileAppBar.css';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import InfoIcon from '@mui/icons-material/Info';
import pp from "../../assets/jpg/IMG20221025172200.jpg"
import { Avatar } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const MobileAppBar = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xxs: 0,
        xs: 360,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  const [value, setValue] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(()=>{
    window.addEventListener('resize', ()=>{
      setWidth(window.innerWidth)
    })
  },[width])

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
    <ThemeProvider theme={theme}>
      <div>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ backgroundColor: '#FF570C !important', 
                position: 'fixed', 
                display:{xxs:'flex',md:'none'}, 
                bottom:'0px', 
                height: 'auto',
                width:`${width}px`, 
                justifyContent: {xxs: 'center', xs: 'space-around' },
                flexWrap: {xxs: 'wrap', xs: 'nowrap'}}}
        >
          {pages.map(x=>{
            const {icon , label} = x;
            return(
              <BottomNavigationAction key={label} label={label} icon={icon} />
            );
          })}
        </BottomNavigation>
      </div>
    </ThemeProvider>
  );
};

export default MobileAppBar;