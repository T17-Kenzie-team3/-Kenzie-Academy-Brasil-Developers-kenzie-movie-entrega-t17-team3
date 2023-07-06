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

>header{
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    min-height: 27rem;
}

.mainHomePage{
    display: flex;
    flex-direction: column;
    padding: 0 1rem 0 1rem;
}

>footer{
    min-height: 17vh;
}

@media (min-width:430px) {

    .mainHomePage{
    display: flex;
    flex-direction: row;
    padding: 0 12% 0 12%;
}
}
 `