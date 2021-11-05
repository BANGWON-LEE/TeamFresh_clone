import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledConnectDiv2 = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    text-align: center!important;
    padding: 0px; 

    ${customMedia.lessThan('mobile')`
        
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
        text-align: center!important;
        padding: 0px;
    `}

`;

export default StyledConnectDiv2;



