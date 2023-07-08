import styled from "styled-components";

export const StyledDashReview = styled.section`
    padding: 0 1rem 0 1rem;

    .divEvaluation{
        display: flex;
        flex-direction: column;
    }

    h1{
        font-size: 1.3125rem;
        font-family: var(--FPoppins);
        margin: 2rem 0 3rem 0;
    }

    .reviewContainer{
        display: flex;
        justify-content: space-between;
        flex-direction: column-reverse;
        align-items: center;
        flex-wrap: nowrap;
        padding: clamp(1rem, 0.6133rem + 2.2099vw, 3rem);
        min-height: 12rem;
        row-gap: 3rem;
    }

    .reviewButtonsContainer{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 1rem;
    }

    .reviewButtonsContainer > div{
        display: flex;
        gap: 0.5rem;
        margin-right: 2rem;
    }

    .reviewButtonsContainer > button{
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        transition: 0.3s;
    }

    .reviewButtonsContainer > button :hover{
        /* transform: translate(3px, 2px) rotate(1deg); */
    }

    @media (min-width:770px) {
        padding: 0 12% 0 12%;
        
        h1{
            font-size: 2.75rem;
            font-family: var(--FPoppins);
        }

        .reviewContainer > p {
            width: 50%;
        }
        
        .reviewContainer{
            flex-direction: row;
            flex-wrap: nowrap;
        }
    }
`