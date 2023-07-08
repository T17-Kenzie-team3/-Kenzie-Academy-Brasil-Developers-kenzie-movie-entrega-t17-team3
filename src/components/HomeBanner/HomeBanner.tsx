import { useContext } from "react"
import { HomeMovieName } from "../../fragments/HomeMovieName"
import { HomeMovieTag } from "../../fragments/HomeTag"
import { MovieContext } from "../../providers/MovieContext"
import { removeSpaces } from "../../services/requests"
import { useNavigate } from "react-router"
import { StyledHomeBanner } from "./style"

export const HomeBanner = () => {

  const { movieList, setSelectedMovie } = useContext(MovieContext)
  const navigate = useNavigate()

  const handleSubmit = async () => {


    localStorage.setItem(
      "@KM: selectedMovieId",
      JSON.stringify(movieList[0])
    )
    setSelectedMovie(movieList[0])
    const movieName = removeSpaces(movieList[0].name)
    navigate(`${movieName}`)
  }

  return (
    <>
      {movieList.length > 0 && (
        <StyledHomeBanner>
          <div>
            <img className="HomeBannerImg"
              onClick={() => handleSubmit()}
              src={movieList[0].image}
              alt="Display principal com a foto de um filme"
            />
          </div>
          <div>
            <HomeMovieTag />
            <HomeMovieName />
          </div>
        </StyledHomeBanner>
      )}
    </>
  )
}
