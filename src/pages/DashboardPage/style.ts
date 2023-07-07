import styled from "styled-components";

export const StyledDashboardPage= styled.section`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: stretch;
height: fit-content;
max-width:100%;
height: fit-content;
width:100%;

.mainHomePage{
 display: flex;
 flex-direction: column;
 padding: 0 1rem 0 1rem;
}

color: var(--white);

@media (min-width:430px) {

    .mainHomePage{
    display: flex;
    flex-direction: row;
    padding: 0 12% 0 12%;
}
}
 `