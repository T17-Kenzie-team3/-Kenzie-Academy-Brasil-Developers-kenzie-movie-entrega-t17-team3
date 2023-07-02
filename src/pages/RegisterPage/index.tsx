import { Header } from "../../components/Header"
import { RegisterForm } from "../../components/RegisterForm"
import { Footer } from "../../components/Footer"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { LoadingPage } from "../../fragments/LoadingPage"

export const RegisterPage = () => {

    const { loadingPage } = useContext(UserContext)

    return (
        <>
            <Header />
            {loadingPage ? <LoadingPage /> :
                <main>
                    <RegisterForm />
                </main>
            }
            <Footer />
        </>
    )
}