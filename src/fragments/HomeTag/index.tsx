import { IMovie } from "../../providers/MovieContext/@types"

interface HomeMovieTagProps {
  movieList: IMovie[]
}

export const HomeMovieTag = ({ movieList }: HomeMovieTagProps) => {
  return (
    <>
      {movieList && (
        <div>
          <button>{movieList[0].type}</button>
          <span>{movieList[0].duration}</span>
        </div>
      )}
    </>
  )
}
