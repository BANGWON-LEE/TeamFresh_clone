import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledNoticeDiv3 = styled.div`
    color: rgb(34, 34, 34);
    box-sizing: border-box;
    position: relative;
    width: 100%;
    min-height: 1px;
    -webkit-box-flex: 0;
    flex: 0 0 50%;
    max-width: 50%;
    padding: 1rem;

    
    ${customMedia.lessThan('mobile')`
        box-sizing: border-box;
        position: relative;
        width: 100%;
        max-width: none;
        min-height: 1px;
        padding: 1rem;
    `}

`;



export default StyledNoticeDiv3;






