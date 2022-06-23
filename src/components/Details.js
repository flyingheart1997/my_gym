import React from 'react';
import { Typography, Stack, Box } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import Equipment from '../assets/icons/equipment.png'
import Loader from './Loader';
import { ThreeDots } from 'react-loader-spinner';

const Details = ({exerciseDetail}) => {
  const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail

  return (
    <Stack sx={{flexDirection:{sm:'row'}, gap:{xs:'30px', md:'0px'}, justifyContent:{sm:'space-around'}, alignItems:'center',ml:'-5px'}} px='20px'>
      <Box className='exercise-cards' mt='80px'
           sx={{alignItems:'center', ml:{sm:'10px'},
           borderRadius:'8px',
           p:'10px', bgcolor:'#ddd', backgroundColor: '#2579', boxShadow:'0px 0px 10px rgba(0,0,0,0.5)', 
           display:'flex', flexDirection:'column', justifyContent:'center',
           '&:hover': {cursor: 'pointer',backgroundColor: '#2589', scale:1.2, transition:'all 0.5s ease-in-out'},
          }}>
          {gifUrl?<img className='imageSize' src={gifUrl} alt={name} loading="lazy" style={{borderRadius:'8px', backgroundColor:'none'}}/> : <Loader/>}
      </Box>
      <Stack pl='20px' gap='40px' pr='0px' sx={{width:{ md:'500px'}, pt:{sm:'50px'}}}>
        {name?<Typography sx={{fontSize:{sm:'40px', xs:'50px', md:'60px'}, fontWeight:'700', lineHeight:{xs:'50px', sm:'39px', md:'55px'}}}> <span style={{color:'yellow'}}>{name}</span></Typography>:<Loader/>}
        <Box alignItems='center' >
          <Typography alignItems='center'  lineHeight='20px' fontSize='14px'>
            Exercise keep you strong. <span style={{fontSize:'22px', color:'yellowgreen', fontWeight:'600',}}> {name} </span> but is one of the best exercises to get you ready for your  <span style={{fontSize:'22px', color:'chocolate', fontWeight:'600',}}> {target}</span>. It will help your <span style={{fontSize:'22px', color:'gold', fontWeight:'600',}}> “ {bodyPart} ” </span> and <span style={{fontSize:'22px', color:'chocolate', fontWeight:'600'}}> {equipment} </span>.
          </Typography>
        </Box>
        <Box pl='15px'>
          <Stack flexDirection='row' gap='20px' alignItems='center'>
            <img src={BodyPartImage} alt='body-part' style={{width:'30px', height:'30px'}}/>
            {bodyPart?<Typography sx={{fontSize:{sm:'20px', xs:'20px', md:'25px'}, fontWeight:'700',textTransform:'capitalize'}}> <span style={{color:'azure'}}>{bodyPart}</span></Typography>:<ThreeDots color="#00BFFF" height={40} width={40} />}
          </Stack><br/>
          <Stack flexDirection='row' gap='20px' alignItems='center'>
            <img src={TargetImage} alt='target' style={{width:'30px', height:'30px'}}/>
            {target?<Typography sx={{fontSize:{sm:'20px', xs:'20px', md:'25px'}, fontWeight:'700',textTransform:'capitalize'}}> <span style={{color:'azure'}}>{target}</span></Typography>:<ThreeDots color="#00BFFF" height={40} width={40} />}
          </Stack><br/>
          <Stack flexDirection='row' gap='20px' alignItems='center'>
            <img src={Equipment} alt='equipment' style={{width:'30px', height:'30px'}}/>
            {equipment?<Typography sx={{fontSize:{sm:'20px', xs:'20px', md:'25px'}, fontWeight:'700',textTransform:'capitalize'}}> <span style={{color:'azure'}}>{equipment}</span></Typography>:<ThreeDots color="#00BFFF" height={40} width={40} />}
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}

export default Details;
