import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Box } from "@mui/system"

// import Feed from "./components/Feed"
// import SearchFeed from "./components/SearchFeed"
// import VideoDetail from "./components/VideoDetail"
// import Navbar from "./components/Navbar"
// import ChannelDetail from "./components/ChannelDetail"

import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from "./components/index"
const App = () => {
  return (
      <Router>
          <Box sx={{ backgroundColor: "#000" }}>
              <Navbar />
              <Routes>
                  <Route path="/" exact element={<Feed /> } />
                  <Route path="/video/:id" element={<VideoDetail /> } />
                  <Route path="/channel/:id" element={<ChannelDetail /> } />
                  <Route path="/search/:searchTerm" element={<SearchFeed /> } />
              </Routes>
          </Box>
      </Router>
  )
}

export default App