import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";
  overflow: hidden;

  @media (min-width: 768px) {
    grid-template-rows: 10.4rem auto 7.7rem;
  }
`;

export const Content = styled.div`
  max-width: 100%;

  grid-area: content;
  overflow-x: auto;
  margin-bottom: 5.3rem;

  > main {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding: 1rem 3.2rem 0;
    font-family: Poppins;

    > a {
      padding-left: 0;
      display: flex;
      align-items: center;

      font-size: 1rem;
      font-weight: 500;
      line-height: 2.3rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      text-decoration: none;
    }

    > section {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      > form {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        > fieldset {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
          border: none;
        }

        .button-wrapper {
          display: flex;
          gap: 3.2rem;
          > button {
            width: 100%;
            max-height: 4.8rem;
            background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
          }
          .remove-button {
            background-color: ${({ theme }) => theme.COLORS.DARK_800};
          }
        }
      }
    }
  }

  .name,
  .category,
  .img,
  .ingredients,
  .price {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .items-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    min-height: 4.8rem;
    max-width: 100%;
    padding: 0.4rem 0.8rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }

  @media (min-width: 768px) {
    > main {
      > a {
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 3.3rem;
      }

      > section {
        > h1 {
          font-size: 3.2rem;
          font-weight: 500;
          line-height: 4.4rem; /* 44.8px */
        }
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        > form {
          display: flex;
          flex-direction: column;
          gap: 2.4rem;
          > fieldset {
            display: flex;
            flex-direction: row;
            gap: 1.6rem;
            border: none;
            width: 100%;
          }
        }
      }
    }

    .basic-wrapper,
    .info-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .name,
    .ingredients {
      flex: 1;
    }

    .category {
      flex: 1;
      max-width: 36.4rem;
    }

    .items-wrapper {
      justify-content: start;
    }

    .button-wrapper {
      justify-content: end;
      > button {
        max-width: fit-content;
      }
    }
  }
`;
