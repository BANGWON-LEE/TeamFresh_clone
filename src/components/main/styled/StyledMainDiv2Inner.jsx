import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledMainDiv2Inner = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    font-family: NotoSansKR, sans-serif;
    color: rgb(34, 34, 34);
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    margin-bottom: 2rem;
    border-radius: 0px;
    background-color: rgb(23, 45, 76);
    padding: 2rem;

        
    ${customMedia.lessThan('mobile')`
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
        margin-bottom: 2rem;
        border-radius: 0px;
        padding: 2rem;
        background-color: #fff;
    `}
`;



export default StyledMainDiv2Inner;



