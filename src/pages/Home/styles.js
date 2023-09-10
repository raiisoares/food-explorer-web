import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: auto;   
    display: grid;
    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas: 
    "header"
    "content"
    "footer";

`;

export const Content = styled.div`
    grid-area: content;

`;