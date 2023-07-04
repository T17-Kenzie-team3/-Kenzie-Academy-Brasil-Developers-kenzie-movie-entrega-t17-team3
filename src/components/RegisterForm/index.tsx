import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom"
import { RegisterFormSchema, TRegisterValues } from "./Schema/RegisterFormSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { atemptRegister } from "../../services/requests";

export const RegisterForm = () => {

    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<TRegisterValues>({
        resolver: zodResolver(RegisterFormSchema),
    })

    const submit: SubmitHandler<TRegisterValues> = (formData) => {
        console.log(formData)
        atemptRegister(formData)
        navigate("/login")
    }

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
                <input type="text" placeholder="Nome" {...register("name")} />
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
            <button>Cadastrar-se</button>
        </form>
    )
}