import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import { LoginForm } from "../../components/LoginForm"
import { Footer } from "../../components/Footer"

export const LoginPage = () => {
    return(
        <>
        <h1>Login Page</h1>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/register">Register</Link>
            <Header />
            <main>
                <LoginForm />
            </main>
            <Footer />
        </>
    )
}