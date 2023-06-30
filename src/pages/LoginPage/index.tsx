import { Link } from "react-router-dom"

export const LoginPage = () => {
    return(
        <>
        <h1>Login Page</h1>
            <Link to="/">Home</Link>
            <Link to="/Dashboard">Dashboard</Link>
            <Link to="/register">Register</Link>
        </>
    )
}