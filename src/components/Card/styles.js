import styled from "styled-components";

export const Container = styled.div`
    height: 29.2rem;
    width: 21rem; 
    padding: 2.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem; 
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    border: solid 1px ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: .8rem;
    position: relative; 

    >img {
        width: 88px;
        height: 88px;
        border-radius: 50%;
    }

    >h2{
        display: flex;
        align-items: center;
        font-family: Poppins;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;
    }

    >span{
        color: ${({ theme }) => theme.COLORS.CAKE_100}   
    }

    >p{
        display: none;;
    }

    .fav{
        position: absolute;
        right: 16px;
        top: 16px; 
    }

    .actionButtons{
        display: flex;
        gap: 1.4rem;
        span{
            color: ${({ theme }) => theme.COLORS.LIGHT_100}
        }
    }

`;