import { useContext } from "react"
import { HomeMovieName } from "../../fragments/HomeMovieName"
import { HomeMovieTag } from "../../fragments/HomeTag"
import { MovieContext } from "../../providers/MovieContext"
import { IMovie } from "../../providers/MovieContext/@types"
import { StyledDashBanner } from "./style"
import { StyledParagrOne } from "../../styles/typography/typography"

export const DashBanner = () => {

  const { selectedMovie } = useContext(MovieContext)
  const movieList: IMovie[] = selectedMovie ? [selectedMovie] : []

  return (
    <StyledDashBanner>
      {movieList.length > 0 && (
        <>
          <div>
            <img className="DashBannerImg" src={movieList[0].image} alt="Imagem do filme selecionado" />

            <div className="divDescription">
              <HomeMovieTag />
              <HomeMovieName />
            </div>
          </div>
          <div className="divSynopsis">
            <StyledParagrOne>{movieList[0].synopsis}</StyledParagrOne>
          </div>
        </>
      )}
    </StyledDashBanner>
  )
}
