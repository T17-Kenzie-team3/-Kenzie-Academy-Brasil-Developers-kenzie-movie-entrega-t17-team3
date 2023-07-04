import { StyledHeader } from "./style"
import { StyledTitleFour, StyledTitleFive } from "../../styles/typography/typography"
import { StyledEllipseSmall } from "../../styles/tags/ellipse"
import { StyledLinkLogin, StyledLinkRegister } from "../../styles/buttons/link"
import { StyledBtnLogout } from "../../styles/buttons/button"
import Logo from "../../assets/Logo_kenziemovie.png"
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
        <StyledHeader>
            <img src={Logo} alt="Kenzie Movies Ícone" />
            <nav>
            {!user ? (
                <div>
                    <StyledLinkRegister to="/register"><button>Cadastrar-se</button></StyledLinkRegister>
                    <StyledLinkLogin to="/login"><button>Entrar</button></StyledLinkLogin>
                </div>
                ) : (
                    <div>
                  
                  
                        <StyledEllipseSmall className="ellipse">
                          <StyledTitleFour className="firstLetter">{user.user.name.charAt(0)}</StyledTitleFour>
                        </StyledEllipseSmall>
                        <StyledTitleFive className="name" >{user.user.name}</StyledTitleFive>
                        <StyledBtnLogout className="logout" onClick={() => Logout()}>Sair</button>
                    </div>
                )
            } 
            </nav>
        </StyledHeader>
    )
}
