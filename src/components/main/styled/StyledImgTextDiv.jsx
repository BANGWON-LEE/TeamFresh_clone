import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledImgTextDiv = styled.div`
    position: absolute;
    top: 60%;
    transform: translateY(-50%);
    right: 15%;
    bottom: 20px;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;

    ${customMedia.lessThan('mobile')`
    
        box-sizing: border-box;
        right: 15%;
        bottom: 20px;
        left: 15%;
        z-index: 10;
        padding-top: 20px;
        padding-bottom: 20px;
        color: #fff;
        text-align: center;
        position: absolute;
        transform: translateY(-50%);
        top: 60%;
    `}
`;



export default StyledImgTextDiv;


