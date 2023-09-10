import styled from "styled-components";

export const Container = styled.div`
        grid-area: header; 
        height: 11.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 6rem 3rem 3rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_700};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};



        .menu {
            display: flex;
            align-items: center;
            gap: 1.6rem;
            padding-left: 2.8rem;

            >h1{
                font-size: 2.1rem;
                font-weight: 400;  
            }
        }

`;