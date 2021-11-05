import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledNavP = styled.span`
    display: block;
    padding: 0.5 rem 1 rem;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    font-weight: 300px;
    font-size: 0.85rem;

    ${customMedia.lessThan('mobile')`
        text-decoration: none;
        background-color: transparent;
        display: block;
        padding: .5rem 1rem;
        font-weight: 300;
        font-size: 0.85rem !important;
        cursor: pointer;
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;
        padding-right: 0;
        padding-left: 0;
        color: rgba(0,0,0,.5);
        `}

    
`;

export default StyledNavP;
