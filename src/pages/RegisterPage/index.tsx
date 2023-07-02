import { Link } from "react-router-dom"
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
            <h1>Register Page</h1>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
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