import React from 'react'
import { Stack, Box } from "@mui/system"
import { ChannelCard, Loader, VideoCard } from './index'


const Videos = ({ videos , direction}) => {
    // console.log(videos)

  if(!videos?.length) return <Loader />
  
  return (
    <Stack direction={direction ? direction :
 "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {  videos.map((item, idx)=>{
          return (
              <Box key={idx}>
                  {item.id.videoId && <VideoCard video={item} />}
                  {item.id.channelId && <ChannelCard channelDetail={item} />}
              </Box>
           )   
        }) } 
   </Stack>
  )
}

export default Videos