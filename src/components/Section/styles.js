import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2.4rem;

  h1 {
    margin-bottom: 2.4rem;
    font-family: Poppins;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.52rem;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .swiper-container {
    /* padding-right: 2.4rem; */
  }

  @media (min-width: 768px) {
    padding: 2.4rem;

    h1 {
      font-size: 3.2rem;
      line-height: 4.48rem;
    }
  }
`;
