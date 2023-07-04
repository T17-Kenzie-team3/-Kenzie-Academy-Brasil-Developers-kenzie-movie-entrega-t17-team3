import { styled } from "styled-components";
import  backgroundImage  from "../../assets/BackgroundLoginPage.png";

export const StyledMainLoginPage = styled.div`
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 83%;
`
export const StyledBodyLoginPage = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: var(--grey2);
`