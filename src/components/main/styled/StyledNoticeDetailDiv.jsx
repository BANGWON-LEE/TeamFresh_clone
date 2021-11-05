import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledNoticeDetailDiv = styled.div`

    font-family: NotoSansKR, sans-serif;
    color: rgb(34, 34, 34);
    box-sizing: border-box;
    margin-bottom: 1.5rem;
    display: block;

    
    ${customMedia.lessThan('mobile')`
        
        box-sizing: border-box;
        margin-bottom: 1.5rem;
        display: block;
        
    `}

`;



export default StyledNoticeDetailDiv;

