import { useContext } from "react"
import { HomeMovieName } from "../../fragments/HomeMovieName"
import { HomeMovieTag } from "../../fragments/HomeTag"
import { MovieContext } from "../../providers/MovieContext"
import { IMovie } from "../../providers/MovieContext/@types"

export const DashBanner = () => {
  const { selectedMovie } = useContext(MovieContext)
  const movieList: IMovie[] = selectedMovie ? [selectedMovie] : []

  return (
    <section>
      {movieList.length > 0 && (
        <>
          <img src={movieList[0].image} alt="Imagem do filme selecionado" />
          <div>
            <HomeMovieTag />
            <HomeMovieName />
          </div>
          <p>{movieList[0].synopsis}</p>
        </>
      )}
    </section>
  )
}
