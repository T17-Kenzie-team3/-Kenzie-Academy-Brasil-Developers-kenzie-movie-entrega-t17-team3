import styled from "styled-components";

export const StyledDashReviewList= styled.ul`

display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
width:100%;
padding: 0 1rem 0 1rem;
gap: 2rem;
height: 32rem;
list-style: none;
overflow-y: auto;

@media (min-width:680px) {
    justify-content: flex-start;
    overflow-x: auto;
    padding: 0 12% 0 12%;
    flex-wrap: wrap;
}
 `