import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledNoticeImg = styled.img`
    box-sizing: border-box;
    vertical-align: middle;
    border-style: none;
    width: 1rem;

    ${customMedia.lessThan('mobile')`
        
        box-sizing: border-box;
        vertical-align: middle;
        border-style: none;
        width: 1rem;
    `}
`;



export default StyledNoticeImg;



