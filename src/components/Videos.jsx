import React from 'react';
import { Stack, Box } from "@mui/material";
import { VCard, CCard } from './';

const Videos = ({videos, direction}) => {

  if(!videos?.length) return <div/>;

  return (
    <Stack direction={direction ? direction : "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VCard video={item} /> }
          {item.id.channelId && <CCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos;