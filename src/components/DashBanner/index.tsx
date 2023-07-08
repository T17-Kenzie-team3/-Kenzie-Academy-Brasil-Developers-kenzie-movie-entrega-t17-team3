import { useContext } from "react"
import { HomeMovieName } from "../../fragments/HomeMovieName"
import { HomeMovieTag } from "../../fragments/HomeTag"
import { MovieContext } from "../../providers/MovieContext"
import { StyledDashBanner } from "./style"
import { StyledParagrOne } from "../../styles/typography/typography"

export const DashBanner = () => {

  const { selectedMovie, movieList } = useContext(MovieContext)
  


  return (
    <StyledDashBanner>
      {movieList.length > 0 && (
        <>
          <div>
            <img className="DashBannerImg" src={selectedMovie?.image} alt="Imagem do filme selecionado" />
            <svg></svg>
            <div className="divDescription">
              <HomeMovieTag />
              <HomeMovieName />
            </div>
          </div>
          <div className="divSynopsis">
            <StyledParagrOne>{selectedMovie?.synopsis}</StyledParagrOne>
          </div>
        </>
      )}
    </StyledDashBanner>
  )
}
