import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledNoticeDiv = styled.div`
    font-family: NotoSansKR, sans-serif;
    color: rgb(34, 34, 34);
    box-sizing: border-box;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 0;

    ${customMedia.lessThan('mobile')`
        box-sizing: border-box;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        padding-bottom: 0;
    `}


`;



export default StyledNoticeDiv;




