import styled from "styled-components";

export const Container = styled.div`
    > div {
        height: 4.3rem;
        display: flex;
        align-items: center;
        gap: 1rem; 

        >h1 {
            font-weight: 700; 
            font-size: 3.7rem;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
    }

    .footer {
        > svg {
            width: 22px;
            height: 18px; 
            >path {
                fill: ${({ theme }) => theme.COLORS.LIGHT_700};
            }
        }

        >h1 {
            font-weight: 700; 
            font-size: 1.5rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_700};
        }
    }
`; 
