import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css'
import ExerciseDetail from './pages/ExerciseDetail';
import BannerImg from './assets/images/bannere.png';
import Header from './components/Header';

const App = () => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box width='400px' position='relative' sx = {{width:{ xl:'1488px'}}} m='auto'>
      <img src={BannerImg} alt="banner" style={{position:'fixed',opacity:.5, width:'100%', height:'100%', zIndex:-1}}/>
      <Header search={search} setSearch={setSearch} setBodyParts={setBodyParts} setExercises={setExercises} />
      <Routes>
        <Route path='/' element={<Home search={search} setSearch={setSearch} bodyParts={bodyParts} setBodyParts={setBodyParts} exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />} />
        <Route path='/exercise/:id' element={<ExerciseDetail exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
