import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormSchema, TRegisterValues } from "./Schema/RegisterFormSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { atemptRegister } from "../../services/requests";
import { toast } from "react-toastify";
import { StyledErrorZod, StyledParagrOne, StyledTitleOne } from "../../styles/typography/typography";
import { GoArrowLeft } from 'react-icons/go';
import { StyledContainerRegisterFormParagraph, StyledContainerRegisterFormButton, StyledRegisterForm, StyledRegisterInputsContainer, StyledTitleRegisteForm, StyledContainerInputUnite } from "./style";
import { StyledInput } from "../../styles/inputs/input";
import { StyledBtnRegister } from "../../styles/buttons/button";
import { StyledLinkYellow } from "../../styles/buttons/link";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const RegisterForm = () => {

    const {navigate} = useContext(UserContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<TRegisterValues>({
        resolver: zodResolver(RegisterFormSchema),
    })

    const submit: SubmitHandler<TRegisterValues> = async (formData) => {
        const newRegister = await atemptRegister(formData)
        if (newRegister) {
            setTimeout(()=> {
                navigate("/login")
            }, 2000)
            toast.success("Cadastro efetuado com sucesso!")
        } else {
            toast.error("Não foi possivel efetuar o cadastro!")
        }
    }
 
    return (
        <StyledRegisterForm onSubmit={handleSubmit(submit)}>
            <StyledTitleRegisteForm>
                <StyledTitleOne>Cadastro</StyledTitleOne>
                <StyledLinkYellow to="/"><GoArrowLeft size="20"/>Voltar</StyledLinkYellow>
            </StyledTitleRegisteForm>
            <StyledContainerRegisterFormParagraph>
                <StyledParagrOne>Preencha os campos para cadastrar-se</StyledParagrOne>
            </StyledContainerRegisterFormParagraph>
            <StyledRegisterInputsContainer>
                <StyledContainerInputUnite>
                    <StyledInput type="text" placeholder="Nome" {...register("name")} />
                    {errors.name ? <StyledErrorZod>{errors.name.message}</StyledErrorZod> : null}
                </StyledContainerInputUnite>
                <StyledContainerInputUnite>
                    <StyledInput type="email" placeholder="E-mail" {...register("email")} />
                    {errors.email ? <StyledErrorZod>{errors.email.message}</StyledErrorZod> : null}
                </StyledContainerInputUnite>
            </StyledRegisterInputsContainer>
            <StyledRegisterInputsContainer>
                <StyledContainerInputUnite>
                    <StyledInput type="text" placeholder="Senha" {...register("password")} />
                    {errors.password ? <StyledErrorZod>{errors.password.message}</StyledErrorZod> : null}
                </StyledContainerInputUnite>
                <StyledContainerInputUnite>
                    <StyledInput type="text" placeholder="Confirmar senha" {...register("confirm")} />
                    {errors.confirm ? <StyledErrorZod>{errors.confirm.message}</StyledErrorZod> : null}
                </StyledContainerInputUnite>
            </StyledRegisterInputsContainer>
            <StyledContainerRegisterFormButton>
                <StyledBtnRegister>Cadastrar-se</StyledBtnRegister>
            </StyledContainerRegisterFormButton>
        </StyledRegisterForm>
    )
}