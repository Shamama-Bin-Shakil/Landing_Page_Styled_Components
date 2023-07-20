import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        background-color: white;
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
        margin: 0;
        color: hsl(192, 100%, 9%);
    }
    p {
        opacity: 0.6;
        line-height: 1.5;
    }
    img {
        max-width: 100%;
    }
`;

export default GlobalStyle;
