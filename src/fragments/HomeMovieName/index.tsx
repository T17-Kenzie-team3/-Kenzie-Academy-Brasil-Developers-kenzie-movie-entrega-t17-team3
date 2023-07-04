import { IMovie } from "../../providers/MovieContext/@types"
import { StarRating } from "../StarRating"

interface HomeMovieNameProps {
  movieList: IMovie[]
}

export const HomeMovieName = ({ movieList }: HomeMovieNameProps) => {
  return (
    <>
      {movieList && (
        <div>
          <h1>{movieList[0].name}</h1>
          <StarRating />
        </div>
      )}
    </>
  )
}
