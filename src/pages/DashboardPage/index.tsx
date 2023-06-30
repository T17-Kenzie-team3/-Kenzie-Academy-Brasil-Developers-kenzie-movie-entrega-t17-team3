import { Link } from "react-router-dom"

export const DashboardPage = () => {
    return(
        <>
            <h1>Dashboard Page</h1>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </>
    )
}