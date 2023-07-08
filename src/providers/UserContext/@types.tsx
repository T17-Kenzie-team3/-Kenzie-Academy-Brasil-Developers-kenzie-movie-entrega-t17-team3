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
    user: IUser | undefined
    userData: IUserData | null
    navigate: NavigateFunction
    currentPath: string
    loadingPage: boolean
    setLoadingPage: React.Dispatch<React.SetStateAction<boolean>>
    userList: IUser[]
    setUserDataList: React.Dispatch<React.SetStateAction<IUser[]>>
    setUserData: React.Dispatch<React.SetStateAction<IUserData | null>>
    isModalOpen: boolean
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}