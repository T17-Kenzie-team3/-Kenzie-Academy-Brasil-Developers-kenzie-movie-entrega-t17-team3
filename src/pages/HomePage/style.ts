import styled from "styled-components";

export const StyledSHomePage= styled.div`
    max-width: 40rem;
    width: clamp(10rem, 90vw, 83rem);
    margin: auto;
    
    >header{
        max-width: 40rem;
        padding: 0;
        position: static;
    }

    >header > img {
        width: clamp(6.8rem, 25vw, 8.5rem);
    }

    >div {
        min-height: 90vh;
    }

    >main {
    width: 100%;
    }
    
    .divName > h1 {
        font-size: clamp(1.313rem, 6vw, 32px);
    }

    >footer {
        min-height: 17vh;
        background-color: var(--color-grey4);
        width: 100vw;
        position: absolute;
        padding: 0 0.5rem;
        left: 0;
    }

    nav > div > :first-child{
        display: none;
    }

    nav > div > :last-child > p{
        width: 7.1rem;
        height: 2.7rem;
    }

@media (min-width:680px) {

    max-width: 83rem;
    >header, > footer{
        max-width: 83rem;
    }

    >footer {
        width: clamp(10rem, 90vw, 83rem);
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