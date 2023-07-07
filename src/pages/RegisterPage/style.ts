import { styled } from "styled-components";

export const StyledBodyRegisterPage = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--grey2);
    @media (min-width:680px) {
        >header, > footer{
            max-width: 100%;
        }

        >footer {
            width: clamp(10rem, 100vw, 100%);
            position: static;
        }

        >header > img {
            width: 8.5rem;
        }

        .divName > h1 {
            font-size: 2.75rem;
        }

        nav > div > :first-child{
            display: block;
        }
    } 
`

export const StyledMainRegisterPage = styled.main`
    width: 100%;
    height: 83%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

