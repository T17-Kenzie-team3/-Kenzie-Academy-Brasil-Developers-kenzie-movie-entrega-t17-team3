import { IMovie } from "../../providers/MovieContext/@types"
import { AiOutlineStar } from "react-icons/ai"

interface HomeMovieCardProps {
  movie: IMovie
}

export const HomeMovieCard = ({ movie }: HomeMovieCardProps) => {
  return (
    <>
      {movie && (
        <li key={movie.id}>
          <img src={movie.image} alt={movie.name} />
          <div>
            <button>{movie.type}</button>
            <span>{movie.duration}</span>
          </div>
          <div>
            <h2>{movie.name}</h2>
            <div>
              <AiOutlineStar />
              <p>5.0</p>
            </div>
          </div>
        </li>
      )}
    </>
  )
}
