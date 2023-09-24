import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    width: 100%;
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: Poppins;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
`;