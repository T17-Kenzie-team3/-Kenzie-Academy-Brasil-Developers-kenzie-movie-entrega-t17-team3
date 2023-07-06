import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { DashBanner } from "../../components/DashBanner"
import { DashReview } from "../../components/DashReview"
import { DashReviewList } from "../../components/DashReviewList"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { LoadingPage } from "../../fragments/LoadingPage"
import { DashReviewEmpty } from "../../components/DashReviewEmpty"
import {StyledDashboardPage} from "./style"

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
          {user ? <DashReview /> : <DashReviewEmpty />}
          <DashReviewList />
        </main>
      )}
      <Footer />
            </StyledDashboardPage>
    
  )
}