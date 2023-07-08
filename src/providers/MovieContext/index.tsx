import { createContext, useContext, useEffect, useState } from "react"
import { IMovieContext, IMovieProviderProps, IMovie, IReview } from "./@types"
import { getMovieList, getSelectedMovie, removeSpaces } from "../../services/requests"
import { UserContext } from "../UserContext"

export const MovieContext = createContext({} as IMovieContext)

export const MovieProvider = ({ children }: IMovieProviderProps) => {

    const [movieList, setMovieList] = useState<IMovie[]>([])
    const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null)
    const [reviews, setReviews] = useState<IReview[]>([])


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

        const reviewList = movieList.find((movie) => movieId === movie.id)?.reviews

        if(reviewList){
           const score = reviewList.length > 0 ? reviewList.reduce((prevValue, review) => {
                if(review.score){
                  return prevValue + Number(review.score)
                } else {
                  return prevValue
                }  
            }, 0) : 0

            return Number(score) / reviewList.length
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
            reviews, setReviews
        }}>
            {children}
        </MovieContext.Provider>
    )
}