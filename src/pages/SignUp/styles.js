import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;

    >main {
        min-width: 31.6rem;
        padding-top: 15.8rem;

        > div{
            
            >h1 {
                display: none;
            }

            >form {
                display: flex;
                flex-direction: column;
                gap: 3.2rem;
                margin: 7.2rem 0 3.2rem;
                
                >label {
                    display: flex;
                    flex-direction: column;
                    gap: .8rem;
                }
            }
            
        }
    }

    @media (min-width: 768px) {
        >main {
            padding-top: 0;
            display: flex;
            align-items: center;
            gap: 30.6rem;

            .form-wrapper {
                width: 47.6rem;
                gap: 3.2rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 6.4rem;
                background-color: ${({ theme }) => theme.COLORS.DARK_700};
                border-radius: 1.6rem; 

                >h1 {
                    display: inline;
                    text-align: center;
                    font-size: 3.2rem;
                    font-weight: 500;
                    line-height: 4.48rem;
                }


                > form {
                    margin: 0;
                }
            }

        }
    }


`;