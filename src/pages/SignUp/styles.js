import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;

    >main {
        width: 31.6rem;
        padding-top: 15.8rem;

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



`;