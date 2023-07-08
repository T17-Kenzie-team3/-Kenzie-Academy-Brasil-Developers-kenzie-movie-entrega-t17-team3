import { IMovie } from "../../providers/MovieContext/@types"
import { AiOutlineStar } from "react-icons/ai"
import { removeSpaces } from "../../services/requests"
import { useContext } from "react"
import { MovieContext } from "../../providers/MovieContext"
import { StyledHomeMovieCard } from "./style"
import { StyledBtnGenre } from "../../styles/tags/tagGenre"
import { StyledParagrOne, StyledTitleThree } from "../../styles/typography/typography"
import { StyledHomeMovieTag } from "../../fragments/HomeTag/style"
import { StyledHomeMovieName } from "../../fragments/HomeMovieName/style"
import { StyledStarRating } from "../../fragments/StarRating/style"
import { UserContext } from "../../providers/UserContext"

interface IHomeMovieCardProps {
  movie: IMovie
}

export const HomeMovieCard = ({ movie }: IHomeMovieCardProps) => {

  const { movieList, getAverageScoresByMovieId, setSelectedMovie } = useContext(MovieContext)
  const { navigate } = useContext(UserContext)

  const averageScore = getAverageScoresByMovieId(movie.id) | 0


  const handleClick = async (MovieId: number) => {
    const movieClicked = movieList.find((movie) => movie.id === MovieId)

    if (movieClicked) {
      localStorage.setItem(
        "@KM: selectedMovieId",
        JSON.stringify(movieClicked.id)
      )
      setSelectedMovie(movieClicked)
      const movieName = removeSpaces(movieClicked.name)
      navigate(`${movieName}`)
    }
  }

  return (
    <>
      {movie && (
        <StyledHomeMovieCard key={movie.id}>

          <div>
            <img className="HomeCardImg"
              onClick={() => handleClick(movie.id)}
              src={movie.image}
              alt={movie.name}
            />
          </div>
          <StyledHomeMovieTag>
            <StyledBtnGenre>{movie.type}</StyledBtnGenre>
            <StyledParagrOne>{movie.duration}m</StyledParagrOne>
          </StyledHomeMovieTag>
          <StyledHomeMovieName>
            <StyledTitleThree className="name">{movie.name}</StyledTitleThree>
            <StyledStarRating>
              <AiOutlineStar fill="#FFBB38" size="35px" />
              <StyledTitleThree className="score">{averageScore.toFixed(1)}</StyledTitleThree>
            </StyledStarRating>
          </StyledHomeMovieName>

        </StyledHomeMovieCard>
      )}
    </>
  )
}
