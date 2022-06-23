import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import Loader from './Loader';
import VideoCard from './VideoCard';

const ExerciseVideos = ({exerciseVideo}) => {

  return (
    <Stack direction='column' mt='70px' px='20px'>
        <Typography sx={{ marginBottom:'20px', fontSize:{sm:'40px', xs:'30px'}, }} fontWeight='700'><span style={{color:'azure'}}>Exercise</span> <span style={{color:'yellowgreen'}}>Videos...</span></Typography>
        {exerciseVideo.contents ?
          <ScrollMenu>
            {
              exerciseVideo.contents?.map((video, index) => (
                <Box key={index} className='exercise-card'
                sx={{cursor:'pointer',
                width:{xs:'270px'},height:{xs:'200px'}, borderRadius:'4px',
                p:'10px', bgcolor:'lightgrey', boxShadow:'0px 0px 10px rgba(0,0,0,0.5)', 
                display:'flex', flexDirection:'column', justifyContent:'center',
                m:'25px',color:'#000' ,'&:hover': {color:'#ddd', cursor: 'pointer',backgroundColor: '#2575', scale:1.2, transition:'all 0.5s ease-in-out'}
                }}
                >
                  <VideoCard video={video?.video} />
                </Box>
              ))
            }
          </ScrollMenu> 
        : <Loader/>}
    </Stack>
  );
}

export default ExerciseVideos;


