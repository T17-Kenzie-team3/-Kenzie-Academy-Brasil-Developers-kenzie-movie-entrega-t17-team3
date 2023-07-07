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

export interface IUserName{
    firstLetter: string
    name: string
    id: number
}

export type TUserNameList = IUserNameData[]

export interface IUserNameData {
  email: string
  name: string
  age: number
  id: number
}

export interface IUserContext {
    user: IUserData | null
    setUser: React.Dispatch<React.SetStateAction<IUserData | null>>
    userReview: IUserReview | null
    setUserReview: React.Dispatch<React.SetStateAction<IUserReview | null>>
    navigate: NavigateFunction
    currentPath: string
    loadingPage: boolean
    setLoadingPage: React.Dispatch<React.SetStateAction<boolean>>
    userNameList: IUserName[]
    setUserNameList: React.Dispatch<React.SetStateAction<IUserName[]>>
    setUserReviews: React.Dispatch<React.SetStateAction<IUserReview[] | null>>
    userReviews: IUserReview[] | null
}