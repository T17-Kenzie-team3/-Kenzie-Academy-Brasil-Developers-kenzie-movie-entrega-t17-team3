import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import { HomeBanner } from "../../components/HomeBanner/HomeBanner"
import { HomeMovieList } from "../../components/HomeMovieList"
import { Footer } from "../../components/Footer"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { LoadingPage } from "../../fragments/LoadingPage"

export const HomePage = () => {

    const { loadingPage } = useContext(UserContext)
    return (
        <>
            <h1>Home Page</h1>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Header />
            {loadingPage ? <LoadingPage /> :
                <main>
                    <HomeBanner />
                    <HomeMovieList />
                </main>
            }
            <Footer />
        </>
    )
}