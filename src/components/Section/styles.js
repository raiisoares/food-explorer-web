import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   padding: 2.4rem 0 2.4rem 2.4rem;
    
   h1{
        margin-bottom: 2.4rem;
        font-family: Poppins;
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 2.52rem
    }

    .carousel{
        cursor: grab;
        overflow: hidden;
    }
    
    .inner{
        display: flex;
        flex-direction: row;
        gap: 1.6rem; 
    }
`;