import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledContentDiv1 = styled.div`
    padding: 1rem;
    position: relative;
    width: 100%;
    min-height: 1px;
    flex-wrap: wrap;
    display: block;
    box-sizing: border-box;
    margin-right: 15px;
    margin-left: 15px;
    
    ${customMedia.lessThan('mobile')`
        text-align: center!important;
        box-sizing: border-box;
        position: relative;
        width: 100%;
        min-height: 1px;
        padding: 1rem;
    `}

`;



export default StyledContentDiv1;


