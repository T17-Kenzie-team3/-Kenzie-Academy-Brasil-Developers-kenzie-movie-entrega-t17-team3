import { createContext, useContext, useEffect, useState } from "react"
import { IMovieContext, IMovieProviderProps, IMovie, ISelectedMovie } from "./@types"
import { getMovieList, getSelectedMovie } from "../../services/requests"
import { UserContext } from "../UserContext"

export const MovieContext = createContext({} as IMovieContext)

export const MovieProvider = ({ children }: IMovieProviderProps) => {

    const [movieList, setMovieList] = useState<IMovie[]>([])
    const [selectedMovie, setSelectedMovie] = useState<ISelectedMovie | null>(null)
    
    const { navigate, currentPath } = useContext(UserContext)

    
    const selectMovieByPathName = () => {
        movieList.map(movie => {
            const movieName = `/${movie.name.replace(/\s+/g, "").toLowerCase()}`
            if(currentPath === movieName){
                localStorage.setItem("@selectedMovieId", JSON.stringify(`${movie.id}`))
            }
        })
    }
    selectMovieByPathName()

    useEffect(() => {
        const setupMovieList = async () =>{
            //setIsPageLoading(true)
            const newList = await getMovieList()
            if (newList) {
                setMovieList(newList)
                //setIsPageLoading(false)
            }
        }
        
        const setupSelectedMovie = async () => {

            const movieId = localStorage.getItem("@selectedMovieId")

            if (movieId){
                //setIsPageLoading(true)
                const newMovie = await getSelectedMovie(JSON.parse(movieId))
                //setIsPageLoading(false)
                if (newMovie) {
                    setSelectedMovie(newMovie)
                    if (currentPath === "/dashboard"){
                        const endPoint = newMovie.name.replace(/\s+/g, "").toLowerCase()
                        window.location.pathname = `/${endPoint}`
                    }
                    navigate(currentPath)
                }
            }
        }

        const loadLists = async () => {
            await setupMovieList()
            await setupSelectedMovie()
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