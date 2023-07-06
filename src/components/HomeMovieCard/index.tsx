import { IMovie } from "../../providers/MovieContext/@types"
import { AiOutlineStar } from "react-icons/ai"
import { getSelectedMovie, removeSpaces } from "../../services/requests"
import { useContext } from "react"
import { MovieContext } from "../../providers/MovieContext"
import { useNavigate } from "react-router"
import { StyledHomeMovieCard } from "./style"
import { StyledBtnGenre } from "../../styles/tags/tagGenre"
import { StyledParagrOne, StyledTitleThree } from "../../styles/typography/typography"
import { StyledHomeMovieTag } from "../../fragments/HomeTag/style"
import { StyledHomeMovieName } from "../../fragments/HomeMovieName/style"
import { StyledStarRating } from "../../fragments/StarRating/style"

interface IHomeMovieCardProps {
  movie: IMovie
}

export const HomeMovieCard = ({ movie }: IHomeMovieCardProps) => {

  const { averageScores, setSelectedMovie } = useContext(MovieContext)
  const averageScore = averageScores.find((score) => score.movieId === movie.id)
  const navigate = useNavigate()

  const handleSubmit = async (id: number) => {
    const movieClicked = await getSelectedMovie(id)
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
            <div>
              <img className="HomeCardImg"
                onClick={() => handleSubmit(movie.id)}
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
                {averageScore && <StyledTitleThree className="score">{averageScore.score}</StyledTitleThree>}
              </StyledStarRating>
            </StyledHomeMovieName>
          </div>
        </StyledHomeMovieCard>
      )}
    </>
  )
}
