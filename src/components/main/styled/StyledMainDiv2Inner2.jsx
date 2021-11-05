import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledMainDiv2Inner2 = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    font-family: NotoSansKR, sans-serif;
    color: rgb(34, 34, 34);
    box-sizing: border-box;
    position: relative;
    min-height: 1px;
    -webkit-box-flex: 0;
    flex: 0 0 100%;
    max-width: 100%;
    width: 100%;
    padding: 70px 50px;

    ${customMedia.lessThan('mobile')`
       
        box-sizing: border-box;
        position: relative;
        min-height: 1px;
        width: 100%;
        padding: 0;
    `}
`;



export default StyledMainDiv2Inner2;


