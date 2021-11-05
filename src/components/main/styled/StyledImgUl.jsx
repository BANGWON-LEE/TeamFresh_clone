import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledImgUl = styled.ul`
    position: absolute;
    right: 0;
    bottom: 10px;
    left: 0;
    z-index: 15;
    display:felx;
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-pack: center;
    justify-content: center;
    padding-left: 0;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;

    
    ${customMedia.lessThan('mobile')`
        box-sizing: border-box;
        margin-top: 0;
        margin-bottom: 1rem;
        position: absolute;
        right: 0;
        bottom: 10px;
        left: 0;
        z-index: 15;
        -webkit-box-pack: center;
        justify-content: center;
        padding-left: 0;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
        display: none;
    `}
`;



export default StyledImgUl;

