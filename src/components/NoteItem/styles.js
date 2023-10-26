import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: min-content;
  gap: 0.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 1rem;
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.LIGHT_600};
  color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  > input {
    /* width: auto; */
    border: none;
    background-color: ${({ theme, isNew }) =>
      isNew ? "transparent" : theme.COLORS.LIGHT_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
`;
