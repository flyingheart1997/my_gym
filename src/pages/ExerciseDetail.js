import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOptions, fetchData, youTubeOptions } from '../utilities/fetchData';
import ExerciseVideos from '../components/ExerciseVideos';
import Details from '../components/Details';
import Exercise from '../components/Exercises';

const ExerciseDetail = ({exercises, setExercises, bodyPart, setBodyPart}) => {
  
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideo, setExerciseVideo] = useState({})

  const { id } = useParams()
   useEffect(()=>{
    const fetchExerciseDetail = async () =>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      const youtubeVideoDetail = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youTubeOptions)
      setExerciseDetail(exerciseDetailData)
      setBodyPart(exerciseDetailData.bodyPart)
      setExerciseVideo(youtubeVideoDetail);
    
    }
    fetchExerciseDetail()
   },[id, setBodyPart])
   
   
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideo={exerciseVideo} />
      <Exercise bodyPart={bodyPart} exercises={exercises} setExercises={setExercises} />
    </Box>
  );
}

export default ExerciseDetail;
