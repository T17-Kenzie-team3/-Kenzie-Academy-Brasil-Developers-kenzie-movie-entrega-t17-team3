import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormSchema, TLoginValues } from "./Schema/LoginFormSchema";
import { zodResolver } from '@hookform/resolvers/zod';
import { atemptLogin } from "../../services/requests";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext"
import { StyledBtnLogin } from "../../styles/buttons/button"
import { StyledInput } from "../../styles/inputs/input"
import { StyledParagrOne, StyledTitleOne } from "../../styles/typography/typography"
import { ContainerFormLogin, ContainerFormRegisterButton, StyledFromLoginPage } from "./style"


export const LoginForm = () => {

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
          setUser(newUser)
          localStorage.setItem("@KM: User", JSON.stringify(newUser))
        }
      }

    return (
        <StyledFromLoginPage onSubmit={handleSubmit(submit)} noValidate>
            <StyledTitleOne>Login</StyledTitleOne>
        <ContainerFormLogin>
            <StyledInput type="email" {...register("email")} />
            {errors.email ? <p>{errors.email.message}</p> : null}
            <StyledInput type="text" {...register("password")}  />
            {errors.password ? <p>{errors.password.message}</p> : null}
          <StyledBtnLogin type="submit">Entrar</StyledBtnLogin>
          <ContainerFormRegisterButton>
      
            <StyledParagrOne>ou</StyledParagrOne>
            <Link to="/register"><StyledBtnLogin type="button">Cadastre-se</StyledBtnLogin></Link>
           </ContainerFormRegisterButton>
          </ContainerFormLogin>
        </StyledFromLoginPage>
    )
}