import styled from "styled-components";
import { Button } from './../../components/Button/index';

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

    >main {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        padding: 1rem 3.2rem 0;

        >section {
            display: flex;
            flex-direction: column;
            gap: 2.4rem;
            >form {
                display: flex;
                flex-direction: column;
                gap: 2.4rem;
                >fieldset {
                    display: flex;
                    flex-direction: column;
                    gap: 1.6rem;
                    border: none;
                }

                button:nth-child(3) {
                    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
                }
            }

        }
    }


    @media (min-width: 768px){ 
        
    }
`;