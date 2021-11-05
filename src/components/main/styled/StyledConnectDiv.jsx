import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledConnectDiv = styled.div`
    color: rgb(34, 34, 34);
    box-sizing: border-box;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 2rem;   

    ${customMedia.lessThan('mobile')`
        
        box-sizing: border-box;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        padding-bottom: 2rem;
    
    `}
`;

export default StyledConnectDiv;


