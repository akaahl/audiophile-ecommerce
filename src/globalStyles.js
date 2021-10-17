import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Manrope', sans-serif;
    }

    body {
        overflow-x: hidden;
    }

    @media (min-width: 2000px) {
        body {
            padding: 0 600px;
        }
    }
`;

export default GlobalStyle;
