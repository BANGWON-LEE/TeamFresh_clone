import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledNoticeInDiv = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 100%;
    min-height: 1px;
    -webkit-box-flex: 0;
    flex: 0 0 100%;
    max-width: 100%;
    background-color: rgb(250, 250, 250);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(238, 238, 238);
    border-image: initial;
    padding: 2rem !important;
    padding-bottom: 0.5rem !important;

            
    ${customMedia.lessThan('mobile')`
        
        box-sizing: border-box;
        position: relative;
        width: 100%;
        min-height: 1px;
        background-color: rgb(250, 250, 250);
        border-width: 1px;
        border-style: solid;
        border-color: rgb(238, 238, 238);
        border-image: initial;
        padding: 2rem !important;
        padding-bottom: 0.5rem !important;
    `}

`;



export default StyledNoticeInDiv;