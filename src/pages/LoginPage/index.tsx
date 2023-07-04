import { Header } from "../../components/Header"
import { LoginForm } from "../../components/LoginForm"
import { Footer } from "../../components/Footer"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { LoadingPage } from "../../fragments/LoadingPage"
import { StyledBodyLoginPage, StyledMainLoginPage } from "./style"

export const LoginPage = () => {

    const { loadingPage } = useContext(UserContext)
    return (
        <StyledBodyLoginPage>
            <Header />
            {loadingPage ? <LoadingPage /> :
                <StyledMainLoginPage>
                    <LoginForm />
                </StyledMainLoginPage>
            }
            <Footer />
        </StyledBodyLoginPage>
    )
}