import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import { HomeBanner } from "../../components/HomeBanner/HomeBanner"
import { HomeMovieList } from "../../components/HomeMovieList"
import { Footer } from "../../components/Footer"

export const HomePage = () => {
    return (
        <>
            <h1>Home Page</h1>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Header />
            <main>
                <HomeBanner />
                <HomeMovieList />
            </main>
            <Footer />
        </>
    )
}