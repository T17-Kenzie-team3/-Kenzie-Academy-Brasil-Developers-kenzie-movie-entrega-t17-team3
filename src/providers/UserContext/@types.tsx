import { NavigateFunction } from "react-router-dom"
import { TMovieScore } from "../MovieContext/@types"
import { TRegisterValues } from "../../components/RegisterForm/Schema/RegisterFormSchema"
import { TLoginValues } from "../../components/LoginForm/Schema/LoginFormSchema"

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
    user: IUser | null
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>
    userReview: IUserReview | null
    setUserReview: React.Dispatch<React.SetStateAction<IUserReview | null>>
    navigate: NavigateFunction
    currentPath: string
    loadingPage: boolean
    setLoadingPage: React.Dispatch<React.SetStateAction<boolean>>
    userRegister: (formData: TRegisterValues) => Promise<void>
    userLogin: (formData: TLoginValues) => Promise<void>
    userLogout: () => void

}