import styled from "styled-components";

export const Container = styled.div`
        grid-area: header; 
        height: 11.4rem;
        display: flex;
        align-items: center;
        background-color: ${({ theme }) => theme.COLORS.DARK_700};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        .menu {
            display: flex;
            align-items: center;
            gap: 1.6rem;
            padding-left: 2.8rem;

            >button {
                display: flex;
                align-items: center;
                background: transparent;
                border: none;
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
            }

            >h1{
                font-size: 2.1rem;
                font-weight: 400;  
            }
        }

`;