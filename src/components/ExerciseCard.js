import { Button, Link, Stack, Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom'
import React from 'react';

const ExerciseCard = ({exercise}) => {
  const navigate = useNavigate();
  const goToPosts = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' })
    navigate({
      pathname: `/exercise/${exercise.id}`
    })};
  
  return (
    <Link onClick={goToPosts} sx={{textDecoration:'none', "&:hover":{color:'lightgrey'}, color:'gray'}} >
        <img src={exercise.gifUrl} alt="ima" loading='lazy' height='255px' width='230px' style={{color:'black', borderRadius:'8px'}}/>
        <Typography sx={{pl:'10px', width:'230px', textTransform:'capitalize',fontSize:{xs:'17px', sm:'18px'}, fontWeight:'700', py:'10px', textOverflow:'ellipsis',overflow: 'hidden', whiteSpace: 'nowrap'}}>{exercise.name}</Typography>
        <Stack direction='row' gap='15px' pl='5px'>
            <Button className='exercise-card' sx={{textTransform:'capitalize', color:'#ddd', p:'1px 10px', backgroundColor:'#180', borderRadius:'18px', "&:hover":{backgroundColor:'#190', color:'lightgrey'}}}>
                {exercise.bodyPart}
            </Button>
            <Button className='exercise-card' sx={{textTransform:'capitalize', color:'#ddd', p:'1px 10px', backgroundColor:'#175', borderRadius:'18px', "&:hover":{backgroundColor:'#172', color:'lightgrey'}}}>
                {exercise.equipment}
            </Button>
        </Stack>
    </Link>
    
  );
}

export default ExerciseCard;
