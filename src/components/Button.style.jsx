import styled from "styled-components"

export const Button = styled.button `
   
    margin-left: 5px;
    position: relative;
    font-family: 'roboto', sans-serif;
    color: #a0a0a0;
    font-size: 18px;
    letter-spacing: 0.5px;
    text-decoration: none;
    background-color: transparent; 
    padding: 0 10px;

    &::after {
        position: absolute;
        background-color: #a71d2a;
        height: 3px;
        width: 0;
        left: 0;
        bottom: -10px;
        transition: 0.3s;
    }
    
    &:hover {
        background-color: #a71d2a;
    }

    &:active {
        background-color: #a71d2a;
    }

`