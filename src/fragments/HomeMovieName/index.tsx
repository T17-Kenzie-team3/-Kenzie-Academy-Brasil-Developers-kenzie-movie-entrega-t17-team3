import { useContext } from "react"
import { MovieContext } from "../../providers/MovieContext"
import { StarRating } from "../StarRating"

export const HomeMovieName = () => {

  const { movieList } = useContext(MovieContext)
  
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
