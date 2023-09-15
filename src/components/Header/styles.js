import styled from "styled-components";
export const Container = styled.div`
        grid-area: header; 
        background-color: ${({ theme }) => theme.COLORS.DARK_700};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        padding: 6rem 3rem 3rem;
        
        > .main-header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            div:nth-child(3){
                display: none;
            }

            button:nth-child(4){
                display: none;
            }

            button:nth-child(5){ 
                   display: none;
            }

        }
        
        .menu {
            display: flex;
            align-items: center;
            gap: 1.6rem;

            >h1{
                font-size: 2.1rem;
                font-weight: 400;  
            }
        }
    
        @media (min-width: 768px){
            padding: 2.4rem 12.3rem;

            > .main-header {
                height: 5.6rem;

                div:nth-child(3){
                display: flex;
            }
                
                Button:nth-child(1){
                    display: none;
                }

                button:nth-child(4){
                    display: flex;
                    max-width: 21.6rem;
                    margin: 0 3.2rem;
               }

               button:nth-child(5){ 
                   display: flex;
            }
      
                button:nth-child(6){ 
                   display: none;
               }
            }

        }

`;
