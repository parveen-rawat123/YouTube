import { useState } from "react"
import {useNavigate} from "react-router-dom";
import { Paper, IconButton } from "@mui/material"; 
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";
const SearchBaar = () => {
    // const [] = useState
    const handleSubmit = ()=>{

    }
  return (
    <SearchBaarstyled>
     <form action="" onSubmit={handleSubmit}>
        <input type="text" 
         placeholder="Search..."
         name=""
         value=""
         onChange={()=>{}}
         />
<IconButton type="submit" className="submit">
 <SearchIcon/>
</IconButton>
     </form>
    </SearchBaarstyled>
  )
}
const SearchBaarstyled = styled.div`
          width: 25rem;
          margin: 0px 60px 10px 0px ;
          form{
              border-radius: 40px;
              background-color: white;
            border: 1px solid #e3e3e3;
            padding-left: 2px;
            box-shadow: none;
            position: relative;
            z-index: 10;
           }
           .submit{
                   padding: 10px;
                   color:red;
           }
           input{
            border: none;
            outline: none;
            height: 100%;
            width: 87%;
            padding-left: 20px;
            font-size: 0.9rem;
           }
`
export default SearchBaar
