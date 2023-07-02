import { Link } from "react-router-dom"
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
            <h1>Login Page</h1>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/register">Register</Link>
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