import { Header } from "../../components/Header"
import { RegisterForm } from "../../components/RegisterForm"
import { Footer } from "../../components/Footer"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { LoadingPage } from "../../fragments/LoadingPage"
import { StyledBodyRegisterPage, StyledMainRegisterPage } from "./style"

export const RegisterPage = () => {

    const { loadingPage } = useContext(UserContext)

    return (
        <StyledBodyRegisterPage>
            <Header />
            {loadingPage ? <LoadingPage /> :
                <StyledMainRegisterPage>
                    <RegisterForm />
                </StyledMainRegisterPage>
            }
            <Footer />
        </StyledBodyRegisterPage>
    )
}