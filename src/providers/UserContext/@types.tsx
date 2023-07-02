import { NavigateFunction } from "react-router-dom"
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

export interface IUserReview {
    id: number
    movieId: number
    userId: number
    score: TMovieScore
    description: string
}

export interface IUserContext {
    user: IUserData | null
    setUser: React.Dispatch<React.SetStateAction<IUserData | null>>
    userReview: IUserReview | null
    setUserReview: React.Dispatch<React.SetStateAction<IUserReview | null>>
    navigate: NavigateFunction
    currentPath: string
}