import React, { useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utilities/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';



const SearchExercise = ({search, setSearch, bodyParts, setBodyParts, bodyPart, setBodyPart, setExercises}) => {

  useEffect(()=>{
    const fetchExercisesData = async ()=> {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExercisesData()
  },[setBodyParts])

  const handleSearch = async () => {
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
      const searchedExercises = exercisesData.filter((exercise)=>exercise.name.toLowerCase().includes(search) 
      || exercise.target.toLowerCase().includes(search)
      || exercise.equipment.toLowerCase().includes(search)
      || exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch('')
      setExercises(searchedExercises)
      window.scrollTo({top:700, behavior:'smooth'})
    }
  }

  return (
    <Stack alignItems='center' mt='30px' justifyContent='center' p='20px' width='100%' sx={{zIndex:-1}}>
        <Typography textAlign='center' color='white' fontWeight='700' sx={{fontSize:{xs:'25px', md:'35px'}, lineHeight:{xs:'30px', md:'38px'}}}>
          Awesome <span style={{color:'#FFF000'}}>Exercises</span> You <br/> Should Know
        </Typography><br/>
        <Box position='relative' mb='50px' mt='20px'>
          <TextField
            sx={{ input: {borderRadius:'8px',height:'8px',border:'1.5px solid #2578a1ba', fontWeight: '700', color:'#ddd'}, width: { md: '700px',sm:'500px',lg:'800px', xs:'350px' }, backgroundColor: 'transparent', borderRadius: '8px' ,"& .MuiOutlinedInput-root": {
            "& > fieldset": { border:'none', backgroundColor:'transparent'}},opacity:.9}}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises . . ."
            type="text"
          />
          <Button onClick={handleSearch} className="search-btn" sx={{ bgcolor: '#2578a1ba', borderRadius:'8px', color: '#fff', textTransform: 'traction', width: { lg: '173px',sm:'120px', xs: '90px' }, height: '44px', position: 'absolute', right: '0px', fontSize: { lg: '18px', xs: '14px' },opacity:.7 }} >
            Search
          </Button>
        </Box>
        <Box sx={{position:'relative', width:'100%', p:'20px 10px',display:"flex",alignItems:'center',justifyContent:'center', flexDirection:'row'}}>            
          <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
    </Stack>
  )
}

export default SearchExercise