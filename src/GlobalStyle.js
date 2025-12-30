import { createGlobalStyle } from "styled-components";
import background from "./images/backgroundImage.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background-image: url("${background}");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        font-family: 'Lato', sans-serif;
        margin: 0; 
    }
`;