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
    overflow: hidden;

    @media (min-width: 768px){ 
        grid-template-rows: 10.4rem auto 7.7rem; 
    }

`;

export const Content = styled.div`
    max-width: 100%;
    grid-area: content;
    overflow-x: auto;
       
`;