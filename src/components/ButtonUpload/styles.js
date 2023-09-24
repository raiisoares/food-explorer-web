import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  height: 4.8rem;
  padding: 1.2rem 3.2rem;
  border: none;
  border-radius: 0.8rem;
  font-family: Poppins;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;
