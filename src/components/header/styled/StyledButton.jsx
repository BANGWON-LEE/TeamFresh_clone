import styled from "styled-components";
import CustomMedia from "../../customMedia"; 

const StyledButton = styled.button`

    box-sizing: border-box;
    margin: 0;
    font-family: inherit;
    overflow: visible;
    text-transform: none;
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: .25rem;
    -webkit-appearance: button;
    display: none;
    color: rgba(0,0,0,.5);
    border-color: rgba(0,0,0,.1);
    cursor: pointer;

    ${CustomMedia.lessThan('mobile')`
        box-sizing: border-box;
        margin: 0;
        font-family: inherit;
        overflow: visible;
        text-transform: none;
        padding: .25rem .75rem;
        font-size: 1.25rem;
        line-height: 1;
        background-color: transparent;
        border: 1px solid transparent;
        border-radius: .25rem;
        -webkit-appearance: button;
        color: rgba(0,0,0,.5);
        border-color: rgba(0,0,0,.1);
        cursor: pointer;
        display: block;
    `}

       
      

    `;

export default StyledButton;


