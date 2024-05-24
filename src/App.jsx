import { useState } from 'react'
import './App.css'
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import {Box} from "@mui/material";
import {VideoDetails,ChanelDetails,SearchFeed, Feed ,Navbaar } from  "./components"

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
<BrowserRouter>
<Box  sx={{backgroundColor : '#000'}}>
<Navbaar/>
  <Routes>
   <Route path='/' exact element={<Feed />} />
   <Route path='/video/:id' exact element={<VideoDetails/>} />
   <Route path='/chanel/:id' exact element={<ChanelDetails/>} />
   <Route path='/search/:searchTerm' exact element={<SearchFeed/>} />
  </Routes>
</Box>

</BrowserRouter>
    </>
  )
}

export default App
