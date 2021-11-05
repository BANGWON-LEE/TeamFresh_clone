import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledFooterDiv = styled.div`
    
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    background-color: rgb(49, 53, 62);
    color: rgb(213, 213, 213);
    padding-top: 1rem;
    padding-bottom: 1rem;
    position: relative;
    bottom: 0px;    

    ${customMedia.lessThan('mobile')`
        box-sizing: border-box;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        background-color: rgb(49, 53, 62);
        color: rgb(213, 213, 213);
        padding-top: 1rem;
        padding-bottom: 1rem;
        position: relative;
        bottom: 0px;
    `}
`;



export default StyledFooterDiv;


