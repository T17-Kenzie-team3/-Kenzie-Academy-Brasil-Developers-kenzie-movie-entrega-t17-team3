import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { DashBanner } from "../../components/DashBanner"
import { DashReview } from "../../components/DashReview"
import { DashReviewList } from "../../components/DashReviewList"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { LoadingPage } from "../../fragments/LoadingPage"

export const DashboardPage = () => {

    const { loadingPage } = useContext(UserContext)

    return (
        <>
            <h1>Dashboard Page</h1>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Header />
            {loadingPage ? <LoadingPage /> :
                <main>
                    <DashBanner />
                    {/* <DashReview /> ou DashReviewEmpty */}
                    <DashReview />
                    <DashReviewList />
                </main>
            }
            <Footer />
        </>
    )
}