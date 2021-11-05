import styled from "styled-components";
import customMedia from "../../customMedia";

export const StyledCardDiv = styled.div`
    text-align: left;
    font-family: NotoSansKR, sans-serif;
    color: rgb(34, 34, 34);
    box-sizing: border-box;
    position: relative;
    width: 100%;
    min-height: 1px;
    -webkit-box-flex: 0;
    flex: 0 0 25%;
    max-width: 25%;
    padding: 1rem;

    ${customMedia.lessThan('mobile')`
        box-sizing: border-box;
        position: relative;
        width: 100%;
        min-height: 1px;
        padding: 1rem;
        -webkit-flex: none;
        -ms-flex: none;
        flex: none;   
        max-width: none;
    `}
`;
export default StyledCardDiv;






