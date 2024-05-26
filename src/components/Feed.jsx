import styled from 'styled-components'
import { categories } from '../utils/constant';
import Navbaar from './Navbaar';
const Feedstyled= styled.div`
  background-color: blanchedalmond;

`;
const Feed = () => {
  return (
    <Feedstyled>
      <Navbaar/>
      {/* <h1>hello</h1>
      {console.log(categories)}
      {categories[1].icon}
      {categories[2].icon}
      {categories[3].icon}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel corporis, esse nostrum nisi ea et culpa sit minima ipsam dicta laudantium laborum harum quasi ab molestiae voluptatum quam necessitatibus at qui corrupti rerum nulla itaque id commodi. Provident, illo. Sint corrupti adipisci odio culpa eius magnam ratione consequatur id fugit.</p>
      <p> this is box</p>  
        world */}
    </Feedstyled>
  )
}



export default Feed
