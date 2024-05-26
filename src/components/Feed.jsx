import { useEffect, useState } from 'react';
import styled from 'styled-components'
import Sidebaar from './Sidebaar';
import { fetchFromAPI } from '../utils/fetchFromAPI';
const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState('New')
   
useEffect (()=>{
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
},[selectedCategory])

  useEffect
  return (
    <Feedstyled>
     <Sidebaar/>
          <h1>color</h1>
    </Feedstyled>
  )
}

const Feedstyled= styled.div`
       height: 86vh;
       display: flex;
       h1{
        color : white;
        font-size: 1rem;
       }
`;

export default Feed
