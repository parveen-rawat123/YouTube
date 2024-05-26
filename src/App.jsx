import './App.css'
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import {VideoDetails,ChanelDetails,SearchFeed, Feed} from  "./components"
import { GlobalStyle } from './style/GlobalStyle';
import Navbaar from './components/Navbaar';

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
<BrowserRouter>
<GlobalStyle/>
<Navbaar/>
  <Routes>
   <Route path='/' exact element={<Feed />} />
   <Route path='/video/:id' exact element={<VideoDetails/>} />
   <Route path='/chanel/:id' exact element={<ChanelDetails/>} />
   <Route path='/search/:searchTerm' exact element={<SearchFeed/>} />
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App
