import React from 'react';
import {Box,} from '@mui/material'
import BodyPart from './BodyPart';
import { ScrollMenu} from 'react-horizontal-scrolling-menu';
import Loader from './Loader';

const HorizontalScrollBar = ({data, bodyPart, setBodyPart}) => {

    

  return (
    <ScrollMenu >
      {
        data.map((item)=>(
          <Box 
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            sx={{margin:{xs:'0 15px', md:'0 20px', lg:'0 25px'}}}
            
        >
            {data.length?<BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />:<Loader/>}
        </Box>
        ))
      }
    </ScrollMenu>
  );
}

export default HorizontalScrollBar;
