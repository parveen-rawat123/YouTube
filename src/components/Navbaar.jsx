import { Link } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import SearchBaar from "./SearchBaar"
import styled from "styled-components"
import Logo from "./Logo";
const Navbaar = () => {
return(
    <NavbarStyled>
    <Link to="/" className="logo">
    <MenuIcon/>
    <Logo/>
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
