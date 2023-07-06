import { styled } from "styled-components";

export const StyledFromLoginPage = styled.form`
    width: 100%;
    max-width: 470px;
    height: 500px;
    background-color: var(--grey2);
    padding: 3.125rem;
    position: absolute;
    left: 15%;
    top: 15%;
    @media (max-width: 768px) {
        left: 50%;
        transform: translateX(-50%);
        max-width: 350px;
    }
`

export const ContainerFormLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    margin-top: 25px;
`

export const ContainerFormRegisterButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`

export const ContainerInputUnite = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`