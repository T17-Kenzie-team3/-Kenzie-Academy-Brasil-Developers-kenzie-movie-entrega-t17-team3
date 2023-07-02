import { createContext, useContext, useEffect, useState } from "react"
import { IMovieContext, IMovieProviderProps, IMovie, ISelectedMovie } from "./@types"
import { getMovieList, getSelectedMovie, getUserReviewsByMovieID, removeSpaces } from "../../services/requests"
import { UserContext } from "../UserContext"

export const MovieContext = createContext({} as IMovieContext)

export const MovieProvider = ({ children }: IMovieProviderProps) => {

    const [movieList, setMovieList] = useState<IMovie[]>([])
    const [selectedMovie, setSelectedMovie] = useState<ISelectedMovie | null>(null)
    
    const { navigate, currentPath, user, setUserReview } = useContext(UserContext)

    
    const selectMovieByPathName = () => {
        movieList.map(movie => {
            const movieName = `/${removeSpaces(movie.name)}`
            if(currentPath === movieName){
                localStorage.setItem("@KM: selectedMovieId", JSON.stringify(`${movie.id}`))
            }
        })
    }
    selectMovieByPathName()

    useEffect(() => {

        const movieId = localStorage.getItem("@KM: selectedMovieId")
        
        const setupMovieList = async () =>{
            //setIsPageLoading(true)
            const newList = await getMovieList()
            //setIsPageLoading(false)
            if (newList) {
                setMovieList(newList)
            }
        }
        
        const setupSelectedMovie = async () => {
            
            
            if (movieId){
                //setIsPageLoading(true)
                const newMovie = await getSelectedMovie(JSON.parse(movieId))
                //setIsPageLoading(false)
                if (newMovie) {
                    setSelectedMovie(newMovie)
                    if (currentPath === "/dashboard"){
                        const endPoint = removeSpaces(newMovie.name)
                        navigate(`/${endPoint}`)
                    } else{
                        navigate(currentPath)
                    }
                }
            }
        }

        const setupUserReviews = async () => {
            if(movieId){
                if(user){
                    const data = {
                        userId: user.user.id,
                        movieId: Number(movieId)
                    }
                    //setIsPageLoading(true)
                    const newUserReviews = await getUserReviewsByMovieID(data)
                    //setIsPageLoading(false)
                    if(newUserReviews){
                        setUserReview(newUserReviews[0])
                    }
                }
            }
        }

        const loadLists = async () => {
            await setupMovieList()
            await setupSelectedMovie()
            await setupUserReviews()
        }

        loadLists()
    },[])

    return(
        <MovieContext.Provider value={{
            movieList, setMovieList, selectedMovie, setSelectedMovie
        }}>
            {children}
        </MovieContext.Provider>
    )
}