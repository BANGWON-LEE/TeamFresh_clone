import styled from "styled-components";
import customMedia from "../../customMedia";

export const StyledBusinessDiv2 = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    text-align: center!important;
    width: 75%;
    margin: 0px auto;
    padding: 0px;

    ${customMedia.lessThan('mobile')`
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        text-align: center!important;
        margin: 0px auto;
        padding: 0px;
        width: 100%;
    `}
`;
export default StyledBusinessDiv2;




