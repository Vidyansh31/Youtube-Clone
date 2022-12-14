import React from 'react';
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, CCard } from "./";
import { Api } from "../utilities/Api";
import { useState, useEffect } from 'react';

const CDetail = () => {

  const [channelDetail, setChannelDetail] = useState([]);
  const [videos, setvideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {

      // fetch channel details
      const data = await Api(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);

      // fetch channel date order by date
      const videosData = await Api(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      setvideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  console.log(videos);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <CCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default CDetail;