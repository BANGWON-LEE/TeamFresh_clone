import styled from "styled-components";

export const StyledMiddleInDiv = styled.div`  
    box-sizing: border-box;
    position: relative;
    display: none;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    perspective: 1000px;
    transition: transform 0.5s ease, -webkit-transform 0.5s ease;
    backface-visibility: visible;

    &:active {
        display:block
    },
    &:focus {
        display: block;
    }
      
        

`;


export default StyledMiddleInDiv;




