import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledConnectSnsA = styled.a`
    text-align: center!important;
    box-sizing: border-box;
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
    font-size: 4.5em;
    padding: 3rem;

    
    ${customMedia.lessThan('mobile')`
        
        text-align: center!important;
        box-sizing: border-box;
        color: #007bff;
        text-decoration: none;
        background-color: transparent;
        font-size: 2em;
        padding: 0.7rem;
    `}


`;

export default StyledConnectSnsA;


