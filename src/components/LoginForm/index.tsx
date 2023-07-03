import { LoginFormSchema, TLoginValues } from "./Schema/LoginFormSchema";
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from "react";
import { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { UserContext } from "../../providers/UserContext";
import { Link } from "react-router-dom";

export const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<TLoginValues>({
        resolver: zodResolver(LoginFormSchema),
      });
      const { userLogin } = useContext(UserContext);
    
      const submit: SubmitHandler<TLoginValues> = (formData) => userLogin(formData);

    return (
        <form onSubmit={handleSubmit(submit)} noValidate>
            <h1>Login</h1>

            <input type="email" {...register("email")} />
            {errors.email ? <p>{errors.email.message}</p> : null}

            <input type="password" {...register("password")} />
            {errors.password ? <p>{errors.password.message}</p> : null}

            <button type="submit">Entrar</button>
            <span>ou</span>
            <Link to="/register"><button type="button">Cadastre-se</button></Link>
        </form>
    )
}