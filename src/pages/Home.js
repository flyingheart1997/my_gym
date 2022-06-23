import React from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercise from '../components/SearchExercise';
import Exercises from '../components/Exercises';

const Home = ({exercises, setExercises, bodyPart, setBodyPart, search, setSearch, bodyParts, setBodyParts}) => {

  return (
    <Box>
      <HeroBanner />
      <SearchExercise search={search} setSearch={setSearch} bodyParts={bodyParts} setBodyParts={setBodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises} />
      <Exercises exercises={exercises} bodyPart={bodyPart} setExercises={setExercises}/>
    </Box>
  );
}

export default Home;
