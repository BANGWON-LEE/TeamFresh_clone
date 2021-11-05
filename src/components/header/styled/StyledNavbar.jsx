import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledNavbar = styled.nav`
    position: fixed;
    height: 60px;
    width: 100%;
    padding: 0.8rem!important;
    display: flex;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    font-family: NotoSansKR, sans-serif;
    color: rgb(34, 34, 34);
    flex-flow: row nowrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
    background-color: #f8f9fa!important;
    z-index: 10;

    ${customMedia.lessThan('mobile')`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background-color: #f8f9fa!important;
    height: 60px;
    position: fixed;
    z-index: 10;
    width: 100%;
    padding: 0.8rem !important;
`}
    
`
export default StyledNavbar;


