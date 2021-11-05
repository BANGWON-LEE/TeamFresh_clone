import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledNavCollapse = styled.div`


   
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    font-family: NotoSansKR, sans-serif;
    color: rgb(34, 34, 34);
    -webkit-box-direction: normal;
    box-sizing: border-box;
    -webkit-box-flex: 1;
    flex-grow: 1;
    -webkit-box-align: center;
    align-items: center;
    padding-right: 20px;
    z-index: 1;
    position: absolute;
    right: 1rem;
    display: flex!important;
    flex-basis: auto;



    ${customMedia.lessThan('mobile')`
    box-sizing: border-box;

    flex-basis: 100%;
    -webkit-box-flex: 1;
    flex-grow: 1;
    -webkit-box-align: center;
    align-items: center;
    z-index: 1;
    padding-right: 0px;
    position: absolute;
    top: 46px;
    left: 23px;
    `}


`;

export default StyledNavCollapse;
