import { Link } from "@mui/material"
import {logo} from "../utils/Constant"
import SearchBaar from "./SearchBaar"
import styled from "styled-components"
const Navbaar = () => {
return(
    <NavbarStyled>
    <Link to="/">
      <img src={logo} alt="" height={55} width="auto" />
    </Link>

    <SearchBaar/>   
  </NavbarStyled> 
)
}

const NavbarStyled = styled.div`
    display:  flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    height: 13vh;
    width: 100%;
    background-color: #000;
    position:sticky;
   img{
     margin  : 15px 40px;
     }
` ;

export default Navbaar
