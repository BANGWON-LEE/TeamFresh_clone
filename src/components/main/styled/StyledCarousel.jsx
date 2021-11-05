import styled from "styled-components";
import customMedia from "../../customMedia";

export const StyledCarousel = styled.div`
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
text-align: left;
font-family: NotoSansKR, sans-serif;
color: rgb(34, 34, 34);
box-sizing: border-box;
position: relative;
width: 100%;
overflow: hidden;
display: -webkit-inline-box;

    ${customMedia.lessThan('mobile')`
    box-sizing: border-box;
    position: relative;
    width: 100%;
    overflow: hidden;
    `}
`;


export default StyledCarousel;


