import React from 'react'
import { useState, useEffect } from "react"
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { Videos } from './index'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import {useParams} from "react-router-dom"

const SearchFeed = () => {

  
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    const data = fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {/*console.log(data)*/
    setVideos(data.items)
})
},[searchTerm])

  return (
    <Box p={2} sx={{overflowY: "auto", height: "90vh", flex: 2}}>
        <Typography variant="h4" fontWeight="bold" mb={2}
          sx={{
          color: "white"
        }}>Search Results For: 
          <span style={{
          color: "#FC1503"
        }}> {searchTerm}</span> Videos
        </Typography>
        <Videos videos={videos} />
      </Box>
  )
}

export default SearchFeed;