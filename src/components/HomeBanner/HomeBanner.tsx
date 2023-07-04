import { useContext } from "react"
import { HomeMovieName } from "../../fragments/HomeMovieName"
import { HomeMovieTag } from "../../fragments/HomeTag"
import { MovieContext } from "../../providers/MovieContext"

export const HomeBanner = () => {
  const { movieList } = useContext(MovieContext)

  return (
    <>
      {movieList.length > 0 && (
        <section>
          <img
            src={movieList[0].image}
            alt="Display principal com a foto de um filme"
          />
          <div>
            <HomeMovieTag movieList={movieList} />
            <HomeMovieName movieList={movieList} />
          </div>
        </section>
      )}
    </>
  )
}
