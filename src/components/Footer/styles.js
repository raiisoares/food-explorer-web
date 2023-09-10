import styled from "styled-components";

export const Container = styled.div`
    grid-area: footer;
    height: 7.7rem;
    width: 100%;
    padding: 2.4rem 4.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    >p {
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
        font-size: 1.2rem;
    }

`;