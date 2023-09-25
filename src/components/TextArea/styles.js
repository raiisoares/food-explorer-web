import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;
  padding: 1.4rem;
  resize: none;
  border: none;
  border-radius: 0.8rem;
  font-family: Roboto;
  font-weight: 400;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
`;
