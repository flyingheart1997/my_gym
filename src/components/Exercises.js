import React,{useEffect, useState} from 'react';
import { Pagination } from '@mui/material';
import {Box, Stack, Typography} from '@mui/material';
import { exerciseOptions, fetchData } from '../utilities/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';


const Exercise = ({exercises, setExercises, bodyPart}) => {
  
  const [currentPage, setCurrentPage] = useState(1)
  const exercisePerPage = 12
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercises = Array.from(exercises).slice(indexOfFirstExercise, indexOfLastExercise)
  
  const paginate = (e, value) =>{
    setCurrentPage(value)
    window.scrollTo({top:700, behavior:'smooth'})
  }

  useEffect(()=>{
    const fetchExerciseData = async () =>{
      let exerciseData = []

      if (bodyPart === 'all'){
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      }else{
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
      }
      setExercises(exerciseData)
    }
    fetchExerciseData()
  },[bodyPart, setExercises])

  return (
    <Box id='exercise'
      sx={{mt:{lg:'20px'},zIndex:1,alignItems:'center'}}
    >
      {window.location.pathname === '/' ?<Typography sx={{ marginBottom:{sm:'30px', xs:'10px'}, fontSize:{sm:'40px', xs:'30px'}}} ml='20px' fontWeight='700'><span style={{color:'#ddd'}}>Showing</span> <span style={{color:'yellowgreen'}}>Exercises...</span></Typography> : 
      <Typography sx={{ marginBottom:{sm:'30px', xs:'10px'}, fontSize:{sm:'40px', xs:'30px'}, }} fontWeight='700' ml='20px'><span style={{color:'#ddd'}}>Similar</span> <span style={{color:'yellowgreen'}}>Exercises...</span></Typography>}
      
      {currentExercises.length ?<Stack direction='row' sx={{gap:{xs:'20px'}, }} flexWrap='wrap' justifyContent='center'  p='40px' borderRadius='8px' >
        {currentExercises.map((exercise, index)=>(
          <Box key={index} className='exercise-card'
           sx={{cursor:'pointer', alignItems:'center',
           width:{xs:'250px'},height:{xs:'355px'}, borderRadius:'8px',
           p:'10px', bgcolor:'#ddd', boxShadow:'0px 0px 10px rgba(0,0,0,0.5)', 
           display:'flex', flexDirection:'column', justifyContent:'center',
           gap:'16px' ,'&:hover': {cursor: 'pointer',backgroundColor: '#2588', scale:1.2, transition:'all 0.5s ease-in-out'},
          }}
          >
            <ExerciseCard key={index} exercise={exercise}/>
          </Box>
        ))}
      </Stack>: <Loader/>}

      <Stack mt='30px' mb='50px' alignItems='center' spacing={2} >
          {exercises.length > exercisePerPage && (
            <Pagination 
              color='secondary'
              shape='rounded'
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisePerPage)}
              page = {currentPage}
              onChange={paginate}
              size='large'
            />
          )}
      </Stack>
    </Box>
  );
}

export default Exercise;


