import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { Link, useNavigate } from "react-router-dom"

export const Header = () => {

    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)

    const Logout = () => {
        localStorage.removeItem("@KM: User")
        setUser(null)
        navigate("/")
      };

    return (
        <header>
            <img src="" alt="Kenzie Movies Ícone" />
            <nav>
            {!user ? (
                <div>
                    <Link to="/register"><button>Cadastrar-se</button></Link>
                    <Link to="/login"><button>Entrar</button></Link>
                </div>
                ) : (
                    <div>
                        <h1>{user.user.name.charAt(0)}</h1>
                        <h1>{user.user.name}</h1>
                        <button onClick={() => Logout()}>Sair</button>
                    </div>
                )
            } 
                </nav>
        </header>
    )
}