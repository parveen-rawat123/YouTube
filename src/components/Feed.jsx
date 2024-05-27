import { useEffect, useState } from 'react';
import styled from 'styled-components'
import Sidebaar from './Sidebaar';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import VideoDetails from './VideoDetails';
// import Videos from './Videos';
const Feed = () => {

  const [selectedCategory, setselectedCategory] = useState('New')
  const [video, setvideo] = useState([]);

  useEffect(() => {
     fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => { setvideo(data)})
  }, [selectedCategory])

  return (
    <Feedstyled>
      <Sidebaar
        setselectedCategory={setselectedCategory}
      />
      <h1>
        {selectedCategory}
        selected category   </h1>
        <VideoDetails video = {[video]}/>
    </Feedstyled>
  )
}

const Feedstyled = styled.div`
       height: 86vh;
       display: flex;
       h1{
        color : white;
        font-size: 1rem;
       }
`;

export default Feed
