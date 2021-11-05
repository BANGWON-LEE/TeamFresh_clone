import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledNoticeDiv2 = styled.div`
    font-family: NotoSansKR, sans-serif;
    color: rgb(34, 34, 34);
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    padding: 2rem;
    padding-bottom: 2rem;

    ${customMedia.lessThan('mobile')`
        box-sizing: border-box;
        display: block;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
        padding: 2rem;
        padding-bottom: 2rem;
    `}


`;



export default StyledNoticeDiv2;



