import { Header } from "../../components/Header"
import { LoginForm } from "../../components/LoginForm"
import { Footer } from "../../components/Footer"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { LoadingPage } from "../../fragments/LoadingPage"

export const LoginPage = () => {

    const { loadingPage } = useContext(UserContext)

    return (
        <>
            <Header />
            {loadingPage ? <LoadingPage /> :
                <main>
                    <LoginForm />
                </main>
            }
            <Footer />
        </>
    )
}