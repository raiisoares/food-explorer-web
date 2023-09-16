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
    padding: 3.6rem 2.8rem 1.3rem;

    .buttons{
        margin-top: 3.6rem;
        >button{
            height: 5.4rem;
            width: 100%;
            margin-top: 1rem;
            padding-left: 1rem;
            background-color: transparent;
            border: none;
            border-bottom: solid 1px ${({ theme }) => theme.COLORS.DARK_1000};
            text-align: justify;
            font-size: 2.4rem;
            font-weight: 300; 
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }


`;