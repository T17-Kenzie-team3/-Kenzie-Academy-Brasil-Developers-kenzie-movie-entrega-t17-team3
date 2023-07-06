import styled from "styled-components";

export const StyledSHomePage= styled.div`
    max-width: 22.2rem;
    width: clamp(10rem, 80vw, 83rem);
    margin: auto;
    >header{
        max-width: 22.2rem;
        padding: 0;
        position: static;
    }

    >div {
        min-height: 90vh;
    }

    >main {
    width: 100%;
    }
    
    >footer {
        min-height: 17vh;
        background-color: var(--color-grey4);
    }

    nav > div > :first-child{
        display: none;
    }

@media (min-width:680px) {
    max-width: 83rem;
    >header, > footer{
        max-width: 83rem;
    }
    nav > div > :first-child{
        display: block;
    }
}
 `