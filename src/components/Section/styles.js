import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2.4rem 0 2.4rem 2.4rem;

  h1 {
    margin-bottom: 2.4rem;
    font-family: Poppins;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.52rem;
  }

  .carousel-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;

    .button-left,
    .button-right {
      display: none;
    }
  }
  .carousel {
    width: 100%;
    cursor: grab;
    overflow: hidden;
  }

  .inner {
    display: flex;
    flex-direction: row;
    gap: 1.6rem;
  }

  @media (min-width: 768px) {
    padding: 2.4rem;

    .carousel-wrapper {
      max-width: 100%;
      .button-left,
      .button-right {
        display: flex;
        background: transparent;
        height: fit-content;
        color: #fff;
        border: none;
      }
    }

    h1 {
      font-size: 3.2rem;
      line-height: 4.48rem;
    }
  }
`;
