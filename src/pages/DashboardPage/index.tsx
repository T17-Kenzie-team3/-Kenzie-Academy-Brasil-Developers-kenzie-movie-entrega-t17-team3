import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { DashBanner } from "../../components/DashBanner"
import { DashReviewList } from "../../components/DashReviewList"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { LoadingPage } from "../../fragments/LoadingPage"
import { StyledDashboardPage } from "./style"
import { DashReview } from "../../components/DashReview"

export const DashboardPage = () => {
  const { loadingPage, user } = useContext(UserContext)

  return (
    <StyledDashboardPage>
      <Header />
      {loadingPage ? (
        <LoadingPage />
      ) : (
        <main>
          <DashBanner />
          {user? <DashReview /> : null}
          <DashReviewList />
        </main>
      )}
      <Footer />
    </StyledDashboardPage>
  )
}
