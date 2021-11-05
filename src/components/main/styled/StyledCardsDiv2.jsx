import styled from "styled-components";
import customMedia from "../../customMedia";

export const StyledCardsDiv2 = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    padding: 2rem;
    padding-bottom: 2rem;

    
    ${customMedia.lessThan('mobile')`   
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
        padding: 2rem;
        padding-bottom: 2rem;
    `}
`;
export default StyledCardsDiv2;






