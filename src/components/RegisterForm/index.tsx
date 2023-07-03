import { Link } from "react-router-dom"

export const RegisterForm = () => {
    return (
        <form>
            <div>
                <h1>Cadastro</h1>
                <div>
                    <img src="" alt="Seta de voltar" />
                    <Link to="/">Voltar</Link>
                </div>
            </div>
            <p>Preencha os campos para cadastrar-se</p>
            <div>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="E-mail" />
            </div>
            <div>
                <input type="text" placeholder="Senha" />
                <input type="text" placeholder="Confirmar senha" />
            </div>
            <button>Cadastrar-se</button>
        </form>
    )
}