import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledMainImg = styled.img`

    text-align: left;
    font-family: NotoSansKR, sans-serif;
    color: rgb(34, 34, 34);
    box-sizing: border-box;
    vertical-align: middle;
    border-style: none;
    height: 100%;
    width: 100%;

    ${customMedia.lessThan('mobile')`
    
        box-sizing: border-box;
        vertical-align: middle;
        border-style: none;
        height: 20rem;
        width: 100%;
    `}

`;



export default StyledMainImg;

