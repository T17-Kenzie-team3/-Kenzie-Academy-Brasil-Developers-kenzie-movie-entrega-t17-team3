import { IMovie } from "../../providers/MovieContext/@types"
import { AiOutlineStar } from "react-icons/ai"
import { getSelectedMovie, removeSpaces } from "../../services/requests"
import { useContext } from "react"
import { MovieContext } from "../../providers/MovieContext"
import { useNavigate } from "react-router"

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
        <li key={movie.id}>
          <img
            onClick={() => handleSubmit(movie.id)}
            src={movie.image}
            alt={movie.name}
          />
          <div>
            <button>{movie.type}</button>
            <span>{movie.duration}</span>
          </div>
          <div>
            <h2>{movie.name}</h2>
            <div>
              <AiOutlineStar />
              {averageScore && <p>{averageScore.score}</p>}
            </div>
          </div>
        </li>
      )}
    </>
  )
}
