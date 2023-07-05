import { useContext } from "react"
import { MovieContext } from "../../providers/MovieContext"

export const HomeMovieTag = () => {
  
  const { movieList } = useContext(MovieContext)

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
