import styled from "styled-components";
import customMedia from "../../customMedia";

export const StyledCardTextA = styled.a`
    word-wrap: break-word;
    box-sizing: border-box;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    line-height: 1.5;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #6c757d;
    background-color: transparent;
    background-image: none;
    border-color: #6c757d;
    border-radius: 2rem;
    font-size: 0.85rem;
    font-weight: 700;
    margin-right: 2rem;
    cursor: pointer;
    justify-items: center;
    align-items: center;m: 2rem;

        &:hover{
            background-color: grey;
            color : white;
        }

    ${customMedia.lessThan('mobile')`
        box-sizing: border-box;
        text-decoration: none;
        display: inline-block;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        line-height: 1.5;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        color: #6c757d;
        background-color: transparent;
        background-image: none;
        border-color: #6c757d;
        border-radius: 2rem;
        font-size: 0.85rem;
        font-weight: 700;
        margin-right: 2rem;
        cursor: pointer;
        justify-items: center;
        align-items: center;
    `}

`;
export default StyledCardTextA;



