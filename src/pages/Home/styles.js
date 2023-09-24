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

  .banner {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 0.3rem;
    max-width: 100%;
    height: 12rem;
    margin: 4.4rem 1.6rem 3.8rem 3rem;
    border-radius: 2.917px;
    background: var(
      --gradients-200,
      linear-gradient(180deg, #091e26 0%, #00131c 100%)
    );
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    > img {
      width: 19.1rem;
      height: 14.9rem;
      margin-bottom: 3.1rem;
      margin-left: -3.1rem;
    }

    > div {
      font-family: Poppins;
      width: 21.5rem;

      > h2 {
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 2.52rem;
      }

      > p {
        font-size: 1.2rem;
        line-height: 1.68rem;
      }
    }
  }

  @media (min-width: 768px) {
    .banner {
      max-width: 100%;
      margin: 16.4rem 12.4rem 6.2rem;
      height: 26rem;
      gap: 0.8rem;

      > img {
        width: 63.2rem;
        height: 40.6rem;
        margin-bottom: 14.6rem;
        margin-left: -6.1rem;
      }

      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        > h2 {
          font-size: 4rem;
          font-weight: 600;
          line-height: 5.6rem;
        }

        > p {
          font-size: 1.6rem;
          line-height: 1.6rem;
        }
      }
    }
  }
`;
