import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormSchema, TLoginValues } from "./Schema/LoginFormSchema";
import { zodResolver } from '@hookform/resolvers/zod';
import { atemptLogin } from "../../services/requests";
import { Link } from "react-router-dom";

export const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<TLoginValues>({
        resolver: zodResolver(LoginFormSchema),
      });
    
      const submit: SubmitHandler<TLoginValues> = (formData) => {
        atemptLogin(formData)
        console.log(formData)
      }

    return (
        <form onSubmit={handleSubmit(submit)} noValidate>
            <h1>Login</h1>
            <input type="email" {...register("email")} />
            {errors.email ? <p>{errors.email.message}</p> : null}
            <input type="text" {...register("password")}  />
            {errors.password ? <p>{errors.password.message}</p> : null}
            <button type="submit">Entrar</button>
            <span>ou</span>
            <Link to="/register"><button type="button">Cadastre-se</button></Link>
        </form>
    )
}