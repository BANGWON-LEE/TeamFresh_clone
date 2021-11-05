import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledMainDiv2 = styled.div`
    text-align: left;
    font-family: NotoSansKR, sans-serif;
    color: rgb(34, 34, 34);
    box-sizing: border-box;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

        
    ${customMedia.lessThan('mobile')`
        box-sizing: border-box;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        `}

`;



export default StyledMainDiv2;




