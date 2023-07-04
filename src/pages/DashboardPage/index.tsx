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