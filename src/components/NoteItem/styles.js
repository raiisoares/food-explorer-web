import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: fit-content; */
  border-radius: 1rem;
  padding-right: 1.6rem;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.LIGHT_600};
  color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  input {
    display: flex;
    /* width: fit-content; */
    height: 3.2rem;
    padding: 1rem 1.6rem;
    border: none;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  > button {
    border: none;
    background: none;
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

