import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Box } from '@mui/system'
import{Videos, ChannelCard} from "./index"
import { fetchFromAPI } from '../utils/fetchFromAPI'



const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])
  const { id } = useParams();
console.log(channelDetail, videos)
  useEffect(() => {
   
     fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0])
    })

    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`).then((data) => {
      setVideos(data?.items)
    })

      
  },[id])




  return (
     <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: "linear-gradient(135deg, rgba(52,5,5,1) 0%, rgba(255,0,0,1) 66%, rgba(255,158,0,1) 95%)"
 ,
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail