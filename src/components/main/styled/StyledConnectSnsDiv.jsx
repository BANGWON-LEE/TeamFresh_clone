import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledConnectSnsDiv = styled.div`
    text-align: center!important;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    min-height: 1px;
    -webkit-box-flex: 0;
    flex: 0 0 100%;
    max-width: 100%;
    padding: 1rem;
    padding-bottom: 2rem;

    ${customMedia.lessThan('mobile')`
        
        text-align: center!important;
        box-sizing: border-box;
        position: relative;
        width: 100%;
        min-height: 1px;
        -webkit-box-flex: 0;
        flex: 0 0 100%;
        max-width: 100%;
        padding: 1rem;
        padding-bottom: 2rem;
    `}

`;

export default StyledConnectSnsDiv;

