import styled from "styled-components";

export const StyledHomeMovieCard= styled.li`


    display: flex;
    flex-direction: column;
    justify-content: space-evenly;


    :first-child {
        border-radius: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin-bottom: 1rem;
    }

    .HomeCardImg{
        width: 100%;
        transform: scale(1.1);
        min-height: 11.6rem;
        max-height: 13.7rem;
        transition: 0.5s;
        cursor: pointer;
    }

    .HomeCardImg:hover{
        transform: scale(1.3);
    }

    @media (min-width:680px) {
   

        .HomeCardImg{
            width: 26rem;
    }
}
 `