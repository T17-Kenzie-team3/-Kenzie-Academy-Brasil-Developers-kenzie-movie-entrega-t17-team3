import { useContext } from "react"
import { HomeMovieCard } from "../HomeMovieCard"
import { MovieContext } from "../../providers/MovieContext"

export const HomeMovieList = () => {
  
  const { movieList } = useContext(MovieContext)

  const moviesToRender = movieList.slice(1)

  return (
    <ul>
      {moviesToRender.map((movie) => (
        <HomeMovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  )
}
