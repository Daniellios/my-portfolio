import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
const GlobalStyles = createGlobalStyle`

  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1em;
    background-color:  ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.black};
    cursor: default;

    &::-webkit-scrollbar {
    width: 2px;
    height: 6px;
    cursor: pointer;
  }
  &::-webkit-scrollbar-track {
    border-radius: 100vh;
    background: #262323;
  }

  &::-webkit-scrollbar-thumb {
    color: #e37e44;
    background:#262323;
    border: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background:  ${(props) => props.theme.colors.hover};
    cursor: pointer;
  }
    

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors.primary1};
  }


  h1{
    font-size: 3em;
    line-height: 1.05em;
  }

  h2{
    font-size: 2.25em;
    line-height: 1.25em;
  }

  h3{
    font-size: 1.75em;
    line-height: 1.25em;
  }

  h4{
    font-size: 1.125em;
    line-height: 1.22em;
  }


  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary1};
  }
  
  li{
    list-style: none;
  }

`;

export default GlobalStyles;
