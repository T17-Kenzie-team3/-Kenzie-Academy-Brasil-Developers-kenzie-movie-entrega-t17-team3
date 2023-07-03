import { HTMLAttributes, useContext } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { RegisterFormSchema, TRegisterValues } from "./Schema/RegisterFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { UserContext } from './../../providers/UserContext/index';


interface IInputRegister extends HTMLAttributes<HTMLInputElement> {
    label: string
    errors: any
}

export const RegisterForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TRegisterValues>({
        resolver: zodResolver(RegisterFormSchema),
    });
    const { userRegister } = useContext(UserContext);  

    const submit: SubmitHandler<TRegisterValues> = (formData) => userRegister(formData);
    
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <h1>Cadastro</h1>
                <div>
                    <img src="" alt="Seta de voltar" />
                    <Link to="/">Voltar</Link>
                </div>
            </div>
            <p>Preencha os campos para cadastrar-se</p>
            <div>
                <input type="text" placeholder="Nome" {...register("name")}/>
                {errors.name ? <p>{errors.name.message}</p> : null}
                
                <input type="email" placeholder="E-mail" {...register("email")} />
                {errors.email ? <p>{errors.email.message}</p> : null}
            </div>
            <div>
                <input type="text" placeholder="Senha" {...register("password")} />
                {errors.password ? <p>{errors.password.message}</p> : null}
                <input type="text" placeholder="Confirmar senha" {...register("confirm")} />
                {errors.confirm ? <p>{errors.confirm.message}</p> : null}
            </div>
            <button type="submit">Cadastrar-se</button>
        </form>
    )
}