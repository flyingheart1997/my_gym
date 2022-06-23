import { Box, Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { fetchData, youTubeOptions } from '../utilities/fetchData';

const VideoCard = ({video}) => {
    const {channelId} = video
    const [channelIcon, setChannelIcon] = useState({})
    useEffect(() => {
        const fetchChannelIcon = async () =>{
          const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
          const youtubeVideoDetail = await fetchData(`${youtubeSearchUrl}/channel?id=${channelId}`, youTubeOptions)
          setChannelIcon(youtubeVideoDetail.avatar?.thumbnails[0]?.url)
        }
        fetchChannelIcon()
      }, [channelId])
    
  return (
      <Box sx={{textDecoration:'none'}} >
        <iframe
        src={`https://www.youtube.com/embed/${video.videoId}`}
        frameBorder='0'
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
        width='250px'
        height='140px'
        style={{borderRadius:'4px'}}
      />{" "}
        <Stack direction='row' pl='5px' pt='5px' alignItems='center' >
            {channelId?<img src={channelIcon} alt='a' height='35px' width='35px' style={{borderRadius:'100%'}}/>: <TailSpin color="#00BFFF" height={30} width={30} />}
            <Typography sx={{pl:'10px', width:'230px', textTransform:'capitalize',fontSize:{xs:'17px', sm:'18px'}, fontWeight:'700', pt:'5px',textOverflow:'ellipsis',overflow: 'hidden', whiteSpace: 'nowrap'}}>{video?.channelName}</Typography>
        </Stack>
        
    </Box>
  );
}

export default VideoCard;