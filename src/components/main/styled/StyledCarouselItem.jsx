import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledCarouselItem = styled.div`
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    font-family: NotoSansKR, sans-serif;
    color: rgb(34, 34, 34);
    box-sizing: border-box;
    position: relative;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    perspective: 1000px;
    transition: transform s ease, -webkit-transform 0.5s ease;
    backface-visibility: visible;
    overflow: hidden;

    ${customMedia.lessThan('mobile')`
        box-sizing: border-box;
        position: relative;
        -webkit-box-align: center;
        align-items: center;
        width: 100%;
        perspective: 1000px;
        transition: transform 0.5s ease, -webkit-transform 0.5s ease;
        backface-visibility: visible;
    `}
    
    
`;

export default StyledCarouselItem;



