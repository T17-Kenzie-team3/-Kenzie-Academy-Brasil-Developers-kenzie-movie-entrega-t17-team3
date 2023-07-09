import { createContext, useContext, useEffect, useState } from "react"
import { IMovieContext, IMovieProviderProps, IMovie, IReview } from "./@types"
import {
  getMovieList,
  getSelectedMovie,
  removeSpaces,
} from "../../services/requests"
import { UserContext } from "../UserContext"

export const MovieContext = createContext({} as IMovieContext)

export const MovieProvider = ({ children }: IMovieProviderProps) => {
  const [movieList, setMovieList] = useState<IMovie[]>([])
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null)
  const [reviews, setReviews] = useState<IReview[]>([])

  const { navigate, currentPath, setLoadingPage } = useContext(UserContext)

  const selectMovieByPathName = () => {
    movieList.map((movie) => {
      const movieName = `/${removeSpaces(movie.name)}`
      if (currentPath === movieName) {
        localStorage.setItem(
          "@KM: selectedMovieId",
          JSON.stringify(`${movie.id}`)
        )
      }
    })
  }
  selectMovieByPathName()

  const getAverageScoresByMovieId = (movieId: number | undefined) => {
    const data = movieList.find((movie) => movie.id === movieId)

    const newList = data?.reviews

    if (newList) {
      const score =
        newList.length > 0
          ? newList.reduce((prevValue, review) => {
              if (review?.score) {
                return prevValue + Number(review.score)
              } else {
                return prevValue
              }
            }, 0)
          : 0

      const scoreMovie = score / newList.length
      return scoreMovie.toFixed(1)
    }
  }

  useEffect(() => {
    const movieId = localStorage.getItem("@KM: selectedMovieId")

    const setupSelectedMovie = async () => {
      if (movieId) {
        setLoadingPage(true)
        const newMovie = await getSelectedMovie(JSON.parse(movieId))
        setLoadingPage(false)
        if (newMovie) {
          setSelectedMovie(newMovie)
          setReviews(newMovie.reviews)
          if (currentPath === "/dashboard") {
            const endPoint = removeSpaces(newMovie.name)
            navigate(`/${endPoint}`)
          } else {
            navigate(currentPath)
          }
        }
      }
    }

    const loadLists = async () => {
      await setupSelectedMovie()
    }

    loadLists()
  }, [])

  useEffect(() => {
    if (selectedMovie) {
      setSelectedMovie((prevMovie) => ({
        ...prevMovie!,
        reviews: reviews,
      }))

      const setupMovieList = async () => {
        const newList = await getMovieList()
        if (newList) {
          setMovieList(newList)
        }
      }

      setupMovieList()
    }
  }, [reviews])

  return (
    <MovieContext.Provider
      value={{
        movieList,
        setMovieList,
        selectedMovie,
        setSelectedMovie,
        getAverageScoresByMovieId,
        reviews,
        setReviews,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}
