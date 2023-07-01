import { createContext, useState } from "react"
import { IMovieContext, IMovieProviderProps, IMovie, ISelectedMovie } from "./@types"

export const MovieContext = createContext({} as IMovieContext)

export const MovieProvider = ({ children }: IMovieProviderProps) => {

    const [movieList, setMovieList] = useState<IMovie[]>([])
    const [selectedMovie, setSelectedMovie] = useState<ISelectedMovie | null>(null)

    return(
        <MovieContext.Provider value={{
            movieList, setMovieList, selectedMovie, setSelectedMovie
        }}>
            {children}
        </MovieContext.Provider>
    )
}