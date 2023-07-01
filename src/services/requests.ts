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

export interface IatemptLoginProp{
    email: string
    password: string
}

export const atemptLogin = async ({email, password}:IatemptLoginProp) => {
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

