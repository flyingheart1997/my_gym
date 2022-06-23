import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
// import hero from '../assets/images/bannere.png'

const HeroBanner = () => {
  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center' >
      <Box sx={{pt:{xs:'100px'},ml:{sm:'40px',xs:'10px',lg:'70px'}}} position='relative' p='30px'>
        <Typography fontSize='30px' fontWeight='700'>
          <span style={{color:'#808000' }} >Fitness</span> <span style={{ color:'#FFF000'}}>Club</span>
        </Typography>
        <Typography color='#00FFFF' fontSize='40px' sx={{fontSize:{lg:'40px',xs:'30px'},lineHeight:{xs:'33px', lg:'39px',},mt:'15px'}}>
          Sweat, Smile and<br/> Repeat
        </Typography>
        <Typography sx={{mt:'10px'}}>
          <span style={{fontSize:'15px', color:'#7FFFD4'}}>Check out the most effective</span> <span style={{color:'#00FF00',fontSize:'20px'}}>Exercises</span>
        </Typography>
        <Button variant='contained' color='secondary' sx={{mt:'20px', display:{xs:'block', md:'none'}, width:'190px'}} href='#exercise'>Explore Exercises</Button>   
      </Box>
       <Box sx={{display:{xs:'none', md:'block'}, marginTop:'100px', mr:{md:'100px', lg:'200px'}}}>
        <Button variant='contained' color='secondary' sx={{mt:'20px'}} href='#exercise'>Explore Exercises</Button>   
      </Box>
    </Stack>

  )
}

export default HeroBanner