import { createContext, useContext, useEffect, useState } from "react"
import { IMovieContext, IMovieProviderProps, IMovie, ISelectedMovie, IAverageScore } from "./@types"
import { getMovieList, getMovieListWithReviews, getSelectedMovie, getUserReviewsByMovieID, removeSpaces } from "../../services/requests"
import { UserContext } from "../UserContext"

export const MovieContext = createContext({} as IMovieContext)

export const MovieProvider = ({ children }: IMovieProviderProps) => {

    const [movieList, setMovieList] = useState<IMovie[]>([])
    const [averageScores, setAverageScores] = useState<IAverageScore[]>([])
    const [selectedMovie, setSelectedMovie] = useState<ISelectedMovie | null>(null)
    //Selected movie contem a lista de todos os reviews do filme selecionado .review;

    const { navigate, currentPath, user, setUserReview, setLoadingPage } = useContext(UserContext)

    const selectMovieByPathName = () => {
        movieList.map(movie => {
            const movieName = `/${removeSpaces(movie.name)}`
            if (currentPath === movieName) {
                localStorage.setItem("@KM: selectedMovieId", JSON.stringify(`${movie.id}`))
            }
        })
    }

    selectMovieByPathName()
    
    const UpdateAverageScores = () => {
        
        let valueList:number[] = []
    
        const scoreCount = selectedMovie?.reviews.length

        if (selectedMovie){
            if (scoreCount){
    
                selectedMovie?.reviews.map((review) =>{
                    if (typeof review.score === "number")
                    valueList.push(review.score)
                })
        
                const newTotal = valueList.reduce((a, b) => a + b, 0)
        
                const newAverage = newTotal / scoreCount
    
                const movieScore = {
                    movieId: selectedMovie.id,
                    score: newAverage
                }
                
                const newList = averageScores.map((score) => {
                    if (score.movieId === selectedMovie.id) {
                        return {
                            ...score,
                            movieScore
                        }
                    }
                    return score
                })

                setAverageScores(newList)
            }

        }

    }

    UpdateAverageScores()

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

        const setupUserReviews = async () => {
            if (movieId) {
                if (user) {
                    const data = {
                        userId: user.user.id,
                        movieId: Number(movieId)
                    }
                    setLoadingPage(true)
                    const newUserReviews = await getUserReviewsByMovieID(data)
                    setLoadingPage(false)
                    if (newUserReviews) {
                        setUserReview(newUserReviews[0])
                    }
                }
            }
        }

        const setupAverageScores = async () => {
            const moviesData = await getMovieListWithReviews()
            if (moviesData) {
                let averageScoreList:IAverageScore[] =[]
                moviesData.map(movie => {
                    let scoreList:number[] = []

                    movie.reviews.map(review => {
                        if (typeof review.score === "number") {
                            scoreList.push(review.score)
                        }
                    })
                    if (scoreList.length > 0) {
                        const average = scoreList.reduce((a, b) => a + b, 0) / scoreList.length
                        const newAverageScore:IAverageScore = {
                            movieId: movie.id,
                            score: average
                        }
                        averageScoreList.push(newAverageScore)
                    } else {
                        const newAverageScore:IAverageScore = {
                            movieId: movie.id,
                            score: 0
                        }
                        averageScoreList.push(newAverageScore)
                    }
                })
                setAverageScores(averageScoreList)
            }
        }

        const loadLists = async () => {
            await setupMovieList()
            await setupSelectedMovie()
            await setupUserReviews()
            await setupAverageScores()
        }

        loadLists()
    }, [])

    return (
        <MovieContext.Provider value={{
            movieList, setMovieList, selectedMovie, setSelectedMovie,
            averageScores, setAverageScores
        }}>
            {children}
        </MovieContext.Provider>
    )
}