import { Link } from "react-router-dom"

export const HomePage = () => {
    return(
        <>
        <h1>Home Page</h1>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </>
    )
}