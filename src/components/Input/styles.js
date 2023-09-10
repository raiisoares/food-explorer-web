import styled from "styled-components";

export const Container = styled.div`
    >input{
        height: 4.8rem;
        width: 100%;
        padding: 1.2rem 1.4rem;
        border: none;
        border-radius: .8rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
    
`;