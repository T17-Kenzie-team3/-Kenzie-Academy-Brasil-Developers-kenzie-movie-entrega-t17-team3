import styled from "styled-components";

export const StyledStarRating= styled.div`
 display: flex;
 flex-direction: row;
 justify-content: flex-end;
 align-items: center;
 width: 30%;
margin: 1rem 0 3rem 0;

.score{
    padding-left: 0.4rem;
}

@media (min-width:430px) {
    padding: 0;
}
 `