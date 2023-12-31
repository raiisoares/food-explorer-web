import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  gap: 0.8rem;
  width: 100%;
  padding: 1.2rem 3.2rem;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: Poppins, "serif";
  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 500;

  .disable {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  .hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }
`;
