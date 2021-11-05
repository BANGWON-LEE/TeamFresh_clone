import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledNavbarUl = styled.ul`
    display: inline-block;
    margin-bottom: 0;
    margin-top: 5px;
    list-style: none;
    padding-right:20px;
    vertical-align: middle;
    
    ${customMedia.lessThan('mobile')`
        box-sizing: border-box;
        margin-top: 0;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        margin-bottom: 0;
        list-style: none;
        background-color: rgb(248, 249, 250);
        padding: 20px;
        width: 97%;

    `}

`;

export default StyledNavbarUl;

