import { IMovie } from "../../providers/MovieContext/@types"
import { AiOutlineStar } from "react-icons/ai"
import { getSelectedMovie, removeSpaces } from "../../services/requests"
import { useContext } from "react"
import { MovieContext } from "../../providers/MovieContext"
import { useNavigate } from "react-router"
import { StyledHomeMovieCard } from "./style"
import { StyledBtnGenre } from "../../styles/tags/tagGenre"
import { StyledParagrOne, StyledTitleThree } from "../../styles/typography/typography"

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
            <img className="HomeCardImg"
              onClick={() => handleSubmit(movie.id)}
              src={movie.image}
              alt={movie.name}
            />
            <div className="divGenre">
              <StyledBtnGenre>{movie.type}</StyledBtnGenre>
              <StyledParagrOne>{movie.duration}m</StyledParagrOne>
            </div>
            <div className="divName">
              <StyledTitleThree className="name">{movie.name}</StyledTitleThree>
              <div className="divRating">
                <AiOutlineStar />
                {averageScore && <StyledTitleThree className="score">{averageScore.score}</StyledTitleThree>}
              </div>
            </div>
          </div>
        </StyledHomeMovieCard>
      )}
    </>
  )
}
