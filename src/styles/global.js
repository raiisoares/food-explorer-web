import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;
    }

    body, input, button, textarea {
        font-family: 'Roboto', serif;
        font-size: 1.6rem;
        font-style: normal;
    }

    input {
        width: fit-content;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
       filter: brightness(0.9);
    }

    textarea:focus, input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    resize: none;
}
/* Estilizando a barra de rolagem */
::-webkit-scrollbar {
  width: 12px;
}

/* Estilizando o botão superior da barra de rolagem */
::-webkit-scrollbar-button:start {
  display: none;
}

/* Estilizando o botão inferior da barra de rolagem */
::-webkit-scrollbar-button:end {
  display: none;
}

/* Estilizando o rastreador da barra de rolagem */
::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

/* Estilizando a alça (thumb) da barra de rolagem */
::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 6px;
}

/* Estilizando a alça quando hover na barra de rolagem */
::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

`;
