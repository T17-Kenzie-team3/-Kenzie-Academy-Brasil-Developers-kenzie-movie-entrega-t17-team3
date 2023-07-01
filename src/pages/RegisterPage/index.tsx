import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import { RegisterForm } from "../../components/RegisterForm"
import { Footer } from "../../components/Footer"

export const RegisterPage = () => {
    return(
        <>
        <h1>Register Page</h1>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Header />
            <main>
                <RegisterForm />
            </main>
            <Footer />
        </>
    )
}