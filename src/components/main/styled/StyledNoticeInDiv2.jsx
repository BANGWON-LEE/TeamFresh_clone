import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledNoticeInDiv2 = styled.div`
    font-family: NotoSansKR, sans-serif;
    color: rgb(34, 34, 34);
    box-sizing: border-box;
    display: flex;

    ${customMedia.lessThan('mobile')`
        
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        text-align: left;
        font-family: NotoSansKR, sans-serif;
        color: rgb(34, 34, 34);
        box-sizing: border-box;
        display: flex;
    `}

`;



export default StyledNoticeInDiv2;


