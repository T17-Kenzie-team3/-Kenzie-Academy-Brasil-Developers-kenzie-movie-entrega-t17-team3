import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormSchema, TLoginValues } from "./Schema/LoginFormSchema";
import { zodResolver } from '@hookform/resolvers/zod';
import { atemptLogin } from "../../services/requests";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext"
import { StyledBtnLogin } from "../../styles/buttons/button"
import { StyledInput } from "../../styles/inputs/input"
import { StyledErrorZod, StyledParagrOne, StyledTitleOne } from "../../styles/typography/typography"
import { ContainerFormLogin, ContainerFormRegisterButton, ContainerInputUnite, StyledFromLoginPage } from "./style"
import { toast } from 'react-toastify';
import { StyledLinkYellow } from "../../styles/buttons/link";


export const LoginForm = () => {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginValues>({
    resolver: zodResolver(LoginFormSchema),
  })

  const { setUser } = useContext(UserContext)

  const submit: SubmitHandler<TLoginValues> = async (formData) => {
    const newUser = await atemptLogin(formData)
    if (newUser) {
      setTimeout(() => {
        setUser(newUser)
        localStorage.setItem("@KM: User", JSON.stringify(newUser))
        navigate("/register");
      }, 2500);

      toast.success("Login efetuado com sucesso!");
    } else {
      toast.error("Erro! Verifique seu email e/ou senha");
    }
  }

  return (
    <StyledFromLoginPage onSubmit={handleSubmit(submit)} noValidate>
      <StyledTitleOne>Login</StyledTitleOne>
      <ContainerFormLogin>
        <ContainerInputUnite>
          <StyledInput type="email" {...register("email")} placeholder="E-mail" />
          {errors.email ? <StyledErrorZod>{errors.email.message}</StyledErrorZod> : null}
        </ContainerInputUnite>
        <ContainerInputUnite>
          <StyledInput type="text" {...register("password")} placeholder="Senha" />
          {errors.password ? <StyledErrorZod>{errors.password.message}</StyledErrorZod> : null}
        </ContainerInputUnite>
        <StyledBtnLogin type="submit">Entrar</StyledBtnLogin>
        <ContainerFormRegisterButton>
          <StyledParagrOne>ou</StyledParagrOne>
          <StyledLinkYellow to="/register">Cadastre-se</StyledLinkYellow>
        </ContainerFormRegisterButton>
      </ContainerFormLogin>
    </StyledFromLoginPage>
  )
}