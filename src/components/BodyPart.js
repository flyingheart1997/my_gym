import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gymm.png'

const BodyPart = ({item, bodyPart, setBodyPart, }) => {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'

      sx={{ borderTop: bodyPart === item ? '4px solid yellow' : '3px solid #257890',
        backgroundColor:'#002526',
        borderBottomLeftRadius:'20px',
        borderBottomRightRadius:'20px',
        width: bodyPart === item ? '120px' :'105px',
        height: bodyPart === item ? '105px' : '95px',
        cursor: 'pointer',
        gap:'8px',
        color: '#00FFFF'
      }}
      onClick={()=>{
        setBodyPart(item)
        window.scrollTo({top:750, left:100, behavior:'smooth'})
      }}
    >
      <img src={Icon} alt='icon' style={{width:'40px', height:'40px'}}/>
      <Typography sx={{textTransform:'capitalize'}}>{item}</Typography>
    </Stack>
  );
}

export default BodyPart;
