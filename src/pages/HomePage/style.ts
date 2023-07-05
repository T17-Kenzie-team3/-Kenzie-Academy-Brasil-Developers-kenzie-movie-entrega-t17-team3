import styled from "styled-components";

export const StyledSHomePage= styled.body`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: stretch;
 height: fit-content;
 max-width:100%;
 background-color: var(--grey2);
 -webkit-font-smoothing: antialiased;
 overflow-y: hidden;
 box-sizing: border-box;

.mainHomePage{
    flex-direction: column;
    align-items: stretch;
    padding:  5.625rem  1rem 0 1rem;

}

@media (min-width:430px) {

    .mainHomePage{
    flex-direction: column;
    padding: 5.625rem 12% 0 12%;
    align-items: stretch;
}
}
 `