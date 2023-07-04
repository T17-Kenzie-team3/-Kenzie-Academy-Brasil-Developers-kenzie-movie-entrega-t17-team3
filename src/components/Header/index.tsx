import { StyledHeader } from "./style"
//import { StyledTitleFour, StyledTitleFive } from "../../styles/typography/typography"
//import { StyledEllipseSmall } from "../../styles/tags/ellipse"
import { StyledLinkLogin, StyledLinkRegister } from "../../styles/buttons/link"
//import { StyledBtnLogout } from "../../styles/buttons/button"
import Logo from "../../assets/Logo_kenziemovie.png"

export const Header = () => {
    return (
        <StyledHeader>
            <img src={Logo} alt="Kenzie Movies Icon" />
            {/* {logged? ( */}
            {/* <nav>
                <StyledEllipseSmall className="ellipse">
                    <StyledTitleFour className="firstLetter">J</StyledTitleFour>
                </StyledEllipseSmall>
                <StyledTitleFive className="name"> José da Silva </StyledTitleFive>
                < StyledBtnLogout className="logout">Sair</ StyledBtnLogout>
           </nav> */}
            {/* ) : ( */}
            <nav>
                <StyledLinkRegister className="linkRegister">Cadastrar-se</StyledLinkRegister>
                < StyledLinkLogin className="linkLogin">Entrar</ StyledLinkLogin> 
            </nav>
        </StyledHeader>
    )
}