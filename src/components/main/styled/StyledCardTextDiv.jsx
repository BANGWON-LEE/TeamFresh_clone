import styled from "styled-components";
import customMedia from "../../customMedia";

export const StyledCardTextDiv = styled.div`
    color: rgb(34, 34, 34);
    -webkit-box-direction: normal;
    word-wrap: break-word;
    box-sizing: border-box;
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    padding: 1.25rem;

    ${customMedia.lessThan('mobile')`
    
        box-sizing: border-box;
        -webkit-box-flex: 1;
        flex: 1 1 auto;
        padding: 0;

    `}

`;
export default StyledCardTextDiv;









   