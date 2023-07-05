import styled from "styled-components";

export const StyledHomeMovieList= styled.ul`
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: stretch;
 height: fit-content;
 width: 100%;

@media (min-width:430px) {
    flex-direction: row;
}
 `