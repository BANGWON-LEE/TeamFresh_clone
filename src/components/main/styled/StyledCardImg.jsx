import styled from "styled-components";
import customMedia from "../../customMedia";

export const StyledCardImg = styled.img`
    text-align: left;
    font-family: NotoSansKR, sans-serif;
    color: rgb(34, 34, 34);
    -webkit-box-direction: normal;
    word-wrap: break-word;
    box-sizing: border-box;
    vertical-align: middle;
    border-style: none;
    width: 100%;
    border-top-left-radius: calc(.25rem - 1px);
    border-top-right-radius: calc(.25rem - 1px);

    ${customMedia.lessThan('mobile')`
        box-sizing: border-box;
        vertical-align: middle;
        border-style: none;
        width: 100%;
        border-top-left-radius: calc(.25rem - 1px);
        border-top-right-radius: calc(.25rem - 1px);
    `}
`;
export default StyledCardImg;





