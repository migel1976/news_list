import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: inherit;
}

a {
    text-decoration: none;
    color: #00F;
}

body {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 10pt;
    background:#BABDB6;
}

`;
