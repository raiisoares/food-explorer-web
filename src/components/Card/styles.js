import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 29.2rem;
  min-width: 21rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: solid 1px ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 0.8rem;
  cursor: grab;

  > img {
    width: 88px;
    height: 88px;
    border-radius: 50%;
  }

  .details {
    display: flex;
    align-items: center;
    font-family: Poppins;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    > span {
      text-align: center;
      max-width: 25rem;
      text-overflow: ellipsis;
    }
  }

  > span {
    color: ${({ theme }) => theme.COLORS.CAKE_100};
  }

  > p {
    display: block;
    max-width: 25rem;
    height: 4.6rem;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .fav {
    position: absolute;
    right: 16px;
    top: 16px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.6rem;
  }

  .actionButtons {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.6rem;
    gap: 1.4rem;
    span {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  @media (min-width: 768px) {
    height: 46.2rem;
    width: 30.4rem;
    padding: 2.4rem;
    cursor: default;

    > img {
      width: 17.6rem;
      height: 17.6rem;
      border-radius: 50%;
    }

    .details {
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 3.36rem;
      cursor: pointer;
    }

    > p {
      display: inline;
      text-align: center;
      font-size: 1.4rem;
      line-height: 2.24rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > span {
      font-size: 3.2rem;
      line-height: 5.22rem;
    }

    > div {
      flex-direction: row;
      gap: 1.6rem;
    }

    .actionButtons {
      font-size: 2rem;
    }
  }
`;
