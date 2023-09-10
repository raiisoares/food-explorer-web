import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    align-items: center;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border-radius: .8rem;

    >input{
        height: 4.8rem;
        width: 100%;
        padding: 1.2rem 1.4rem;
        border: none;
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    >svg {
        margin-left: 1.6rem;
    }
    
`;