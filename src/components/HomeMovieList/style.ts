import styled from "styled-components";
export const StyledHomeMovieList= styled.ul`

display: flex;
flex-direction: column;
width: 100%;
gap: 2rem;
height: fit-content;

@media (min-width:680px) {
    overflow-x: auto;
    flex-direction: row;
    height: 21.5rem;
}
 `