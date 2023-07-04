import { IMovie } from "../../providers/MovieContext/@types"

interface IHomeMovieTagProps {
  movieList: IMovie[]
}

export const HomeMovieTag = ({ movieList }: IHomeMovieTagProps) => {
  
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
