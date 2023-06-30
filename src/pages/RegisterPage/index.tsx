import { Link } from "react-router-dom"

export const RegisterPage = () => {
    return(
        <>
        <h1>Register Page</h1>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
        </>
    )
}