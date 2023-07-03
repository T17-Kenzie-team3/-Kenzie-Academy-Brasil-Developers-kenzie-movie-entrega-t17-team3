export type TMovieScore = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
export type TmovieGenre = "ficção" | "comédia" | "drama"

export interface IMovieProviderProps {
    children: React.ReactNode
}

export interface IMovie {
    id: number
    name: string
    type: TmovieGenre
    duration: number
    synopsis: string
    image: string
}

export interface ISelectedMovie {
    id: number
    name: string
    type: TmovieGenre
    duration: number
    synopsis: string
    image: string
    reviews: IReview[]
}

export interface IReview {
    movieId: number
    userId: number
    score: TMovieScore
    description: string
}

export interface IMovieContext {
    movieList: IMovie[]
    setMovieList: React.Dispatch<React.SetStateAction<IMovie[]>>
    selectedMovie: ISelectedMovie | null
    setSelectedMovie: React.Dispatch<React.SetStateAction<ISelectedMovie | null>>
}