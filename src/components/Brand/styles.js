import styled from "styled-components";

export const Container = styled.div`
    > div {
        height: 2.4rem; 
        display: flex;
        align-items: center;
        gap: .8rem; 

        
        >svg {
            width: 2.4rem;
            height: 2.4rem; 
        }

        >h1 {
            font-size: 2.1rem;
            font-weight: 700;
            line-height: normal; 
        }
    }

    .footer {
        gap: 1rem;

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

    .auth {

        > svg {
            width: 4.3rem;
            height: 4.3rem; 
        }

        >h1 {
            font-weight: 700; 
            font-size: 3.7rem;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
    }
`; 
