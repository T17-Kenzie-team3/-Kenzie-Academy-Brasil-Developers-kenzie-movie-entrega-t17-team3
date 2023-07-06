import styled from "styled-components";
export const StyledHomeMovieList= styled.ul`

display: flex;
flex-direction: column;
width: 100%;
gap: 2rem;
height: 21.5rem;

@media (min-width:680px) {
    overflow-x: auto;
    flex-direction: row;
}
 `