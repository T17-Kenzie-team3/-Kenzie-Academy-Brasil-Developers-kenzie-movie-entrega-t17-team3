import { IUserData } from "../providers/UserContext"
import { api } from "./api"

export type TmovieGenre = "ficção" | "comédia" | "drama"

export interface IMovie {
    id: number
    name: string
    type: TmovieGenre
    duration: number
    synopsis: string
}

export const getMovieList = async () => {
    try {
        const { data } = await api.get<IMovie[]>("/movies")
        return data
    } catch (error) {
        return false
    }
}

interface IAtemptLoginProp{
    email: string
    password: string
}

export const atemptLogin = async ({email, password}:IAtemptLoginProp) => {
    try {
        const { data } = await api.post<IUserData>("/sessions", {
            email: email,
            password: password,
        })
        return data
    } catch (error) {
        return false       
    }
}

interface IAtemptRegisterProp{
    email: string
    password: string
    name: string
}

export const atemptRegister = async ({email, password, name}:IAtemptRegisterProp ) => {
    try {
        const { data } = await api.post<IUserData>("/users", {
            email: email,
            password: password,
            name: name,
        })

        return data
    } catch (error) {
        return false
    }
}

interface IGetUserRatingsByMovieIDProps{
    userId: number
    movieId: number
}

export const getUserRatingsByMovieID = async ({userId, movieId}: IGetUserRatingsByMovieIDProps) => {
    try {
        const { data } = await api.get(`/movies/${movieId}/reviews?userId=${userId}`)
        return data
    } catch (error) {
        return false
    }
}