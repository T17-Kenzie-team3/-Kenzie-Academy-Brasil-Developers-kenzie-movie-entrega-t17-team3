import { Header } from "../../components/Header"
import { HomeMovieList } from "../../components/HomeMovieList"
import { HomeBanner } from "../../components/HomeBanner/HomeBanner"
import { Footer } from "../../components/Footer"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { LoadingPage } from "../../fragments/LoadingPage"
import{StyledSHomePage} from "./style"

export const HomePage = () => {
    
  const { loadingPage } = useContext(UserContext)

  return (
    <StyledSHomePage>
      <Header />
      {loadingPage ? (
        <LoadingPage />
      ) : (
        <main className="mainHomePage">
          <HomeBanner />
          <HomeMovieList />
        </main>
      )}
      <Footer />
    </StyledSHomePage>
  )
}
