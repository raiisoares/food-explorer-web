import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;
