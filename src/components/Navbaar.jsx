import { Link, Stack } from "@mui/material"
import {logo} from "../utils/constant"
import SearchBaar from "./SearchBaar"
import styled from "styled-components"
const Navbaar = () => {
return(
    <NavbarStyled>
    <Link to="/">
      <img src={logo} alt="" height={70} width="auto" />
    </Link>
    <h1>this is my yt</h1>
    <SearchBaar/>   
  </NavbarStyled> 
)
}

const NavbarStyled = styled.div`
    display:  flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* background-color: #000; */
` ;
   

export default Navbaar
