import { StyledBtnLogin } from "../../styles/buttons/button"
import { StyledInput } from "../../styles/inputs/input"
import { StyledParagrOne, StyledTitleOne } from "../../styles/typography/typography"
import { ContainerFormLogin, ContainerFormRegisterButton, StyledFromLoginPage } from "./style"


export const LoginForm = () => {
    return (
        <StyledFromLoginPage>
            <StyledTitleOne>Login</StyledTitleOne>
            <ContainerFormLogin>
                <StyledInput type="email" placeholder="E-mail"/>
                <StyledInput type="text" placeholder="Senha"/>
                <StyledBtnLogin type="submit">Entrar</StyledBtnLogin>
                <ContainerFormRegisterButton>
                    <StyledParagrOne>ou</StyledParagrOne>
                    <button type="button">Cadastre-se</button>
                </ContainerFormRegisterButton>
            </ContainerFormLogin>
        </StyledFromLoginPage>
    )
}