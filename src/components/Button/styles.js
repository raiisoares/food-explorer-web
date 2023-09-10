import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    width: 31.6rem;
    padding: 1.2rem 3.2rem;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: .5rem; 
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: Poppins, "serif"; 
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 500;
`;