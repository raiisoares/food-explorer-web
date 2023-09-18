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
    padding: 1.6rem 5.6rem 3.3rem;

    >main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: Poppins;

        >img {
            width: 26.4rem;
            height: 26.4rem; 
            border-radius: 50%;
            padding: 1.6rem 2.6rem;
        }

        >h1 {
            font-size: 2.7rem;
            font-weight: 500;
            line-height: 3.7rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        >p {
            text-align: center;
            font-size: 1.6rem;
            line-height: 2.2rem;
            margin: 2.4rem 0 ;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        .tags {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 2.4rem;
        }

        .action-wrapper{
            display: flex;
            gap: 1.6rem;
            margin-top: 4.8rem;
        }

        .actionButtons{
            display: flex;
            align-items: center;
            gap: 1.6rem;
        }
    }
       
`;