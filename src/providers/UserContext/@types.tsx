import { TMovieScore } from "../MovieContext/@types"

export interface IUserProviderProps {
    children: React.ReactNode
}

export interface IUserData {
    accessToken: string
    user: IUser
}

export interface IUser {
    email: string
    name: string
    id: number
}

export interface IUserRating {
    id: number
    movieId: number
    userId: number
    score: TMovieScore
    description: string
}

export interface IUserContext {
    user: IUserData | null
    setUser: React.Dispatch<React.SetStateAction<IUserData | null>>
    userRating: IUserRating | null
    setUserRating: React.Dispatch<React.SetStateAction<IUserRating | null>>
}