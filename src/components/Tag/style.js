import styled from "styled-components";

export const Container = styled.div`
    width: fit-content;
    padding: .4rem .8rem;
    border-radius: .5rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;