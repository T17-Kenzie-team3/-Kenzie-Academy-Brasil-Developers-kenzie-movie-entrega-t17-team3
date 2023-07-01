import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { DashBanner } from "../../components/DashBanner"
import { DashRating } from "../../components/DashRating"
import { DashRatingList } from "../../components/DashRatingList"

export const DashboardPage = () => {
    return(
        <>
            <h1>Dashboard Page</h1>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Header />
            <main>
                <DashBanner />
                {/* <DashRating /> ou DashRatingEmpty */}
                <DashRating />
                <DashRatingList />
            </main>
            <Footer />
        </>
    )
}