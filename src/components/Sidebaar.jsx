import styled from "styled-components";
import { categories } from "../utils/Constant";
import { useState } from "react";

const Sidebaar = ({ setselectedCategory }) => {

  const [activeButton, setActiveButton] = useState(categories[0].name);

  const changeColor = (categoryName) => {
    setselectedCategory(categories.name)
    setActiveButton(categoryName);
  };

  return (
    <SidebaarStyled>
      {categories.map((category) => (
        <div className="container" key={category.name}
        onClick={()=> setselectedCategory(category.name)}
        >
          <button
            onClick={() => changeColor(category.name)}
            className={activeButton === category.name ? "active" : ""}
          >
            <span className="icon"
            >{category.icon}</span>
            <span className="name">{category.name}</span>
          </button>
        </div>
      ))}
    </SidebaarStyled>
  );
};

const SidebaarStyled = styled.div`
  padding-top: 20px;
  width: 17%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 86vh;

  .container {
    display: flex;
    justify-content: center;
  }

  button {
    background-color: #000;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
    border: none;
    width: 90%;
    height: 2.5rem;
    gap: 1rem;
    padding-left: 10px;
    border-radius: 10px;
  }

  button:hover {
    background-color: #3f3f3f;
    
  }

  .active {
    background-color: #3f3f3f;
  }

  .icon {
    margin-right: 10px;
    color: red;
  }

  .name {
    font-size: 0.9rem;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 0.9rem;
  }

  scrollbar-width: thin;
  scrollbar-color: #888 #000;
`;

export default Sidebaar;
