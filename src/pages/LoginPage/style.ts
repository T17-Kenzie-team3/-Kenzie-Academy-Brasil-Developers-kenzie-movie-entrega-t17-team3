import { styled } from "styled-components";
import  backgroundImage  from "../../assets/BackgroundLoginPage.png";

export const StyledMainLoginPage = styled.div`
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 83%;
`
export const StyledBodyLoginPage = styled.main`
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