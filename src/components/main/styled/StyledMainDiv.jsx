import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledMainDiv = styled.div`
    text-align: left;
    font-family: NotoSansKR, sans-serif;
    color: rgb(34, 34, 34);
    box-sizing: border-box;
    position: relative;

    ${customMedia.lessThan('mobile')`
        box-sizing: border-box;
        position: relative;
        width: 100%;
        overflow: hidden;
    `}


`;



export default StyledMainDiv;



