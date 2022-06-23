import { Stack } from '@mui/material';
import React from 'react';
import logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Stack height='100px'  width='100%' bgcolor='gray' alignItems='center' justifyContent='center'>
      <img src={logo} alt='footer' style={{color:'#fff'}}/>
    </Stack>
  );
}

export default Footer;
