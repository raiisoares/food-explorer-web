import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    >p {
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
        font-size: 1.2rem;
    }

`;