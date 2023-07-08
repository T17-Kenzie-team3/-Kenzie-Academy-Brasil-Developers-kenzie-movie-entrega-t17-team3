import styled from "styled-components";

export const StyledDashReviewEmpty = styled.section`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem 0 1rem;
    
    h1{
    font-size: 1.3125rem;
    font-family: var(--FPoppins);
    margin: 2rem 0 3rem 0;
}

@media (min-width:770px) {
    padding: 0 12% 0 12%;

    h1{
    font-size: 2.75rem;
    font-family: var(--FPoppins);
}
}
 `