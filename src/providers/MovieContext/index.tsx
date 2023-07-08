import { createContext, useContext, useEffect, useState } from "react"
import { IMovieContext, IMovieProviderProps, IMovie } from "./@types"
import { getMovieList, getSelectedMovie, removeSpaces } from "../../services/requests"
import { UserContext } from "../UserContext"

export const MovieContext = createContext({} as IMovieContext)

export const MovieProvider = ({ children }: IMovieProviderProps) => {

    const [movieList, setMovieList] = useState<IMovie[]>([])
    const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null)
    const reviews = selectedMovie?.reviews

    const { navigate, currentPath, setLoadingPage } = useContext(UserContext)

    const selectMovieByPathName = () => {
        movieList.map(movie => {
            const movieName = `/${removeSpaces(movie.name)}`
            if (currentPath === movieName) {
                localStorage.setItem("@KM: selectedMovieId", JSON.stringify(`${movie.id}`))
            }
        })
    }
    
    selectMovieByPathName()
    
    const getAverageScoresByMovieId = (movieId:number) => {

        const movie = movieList.find((movie) => movie.id === movieId)
        const reviewList = movie?.reviews
        if(reviewList){
           const score = reviewList.length > 0 ? reviewList.reduce((prevValue, review) => {
                if(review.score){
                  return prevValue + Number(review.score)
                } else {
                  return prevValue
                }  
            }, 0) : 0

            return score
        }
    }

    useEffect(() => {

        const movieId = localStorage.getItem("@KM: selectedMovieId")

        const setupMovieList = async () => {
            setLoadingPage(true)
            const newList = await getMovieList()
            setLoadingPage(false)
            if (newList) {
                setMovieList(newList)
            }
        }

        const setupSelectedMovie = async () => {

            if (movieId) {
                setLoadingPage(true)
                const newMovie = await getSelectedMovie(JSON.parse(movieId))
                setLoadingPage(false)
                if (newMovie) {
                    setSelectedMovie(newMovie)
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
            await setupMovieList()
            await setupSelectedMovie()
        }

        loadLists()
    }, [])

    return (
        <MovieContext.Provider value={{
            movieList, 
            setMovieList, 
            selectedMovie, 
            setSelectedMovie,
            getAverageScoresByMovieId, 
            reviews
        }}>
            {children}
        </MovieContext.Provider>
    )
}