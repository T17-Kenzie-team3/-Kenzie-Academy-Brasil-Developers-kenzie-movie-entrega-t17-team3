import { IMovie, IRating, ISelectedMovie } from "../providers/MovieContext/@types"
import { IUserData, IUserRating } from "../providers/UserContext/@types"
import { api } from "./api"

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
        const { data } = await api.get<IUserRating[]>(`/movies/${movieId}/reviews?userId=${userId}`)
        return data
    } catch (error) {
        return false
    }
}

export const getMovieList = async () => {
    try {
        const { data } = await api.get<IMovie[]>("/movies")
        return data
    } catch (error) {
        return false
    }
}

export const getSelectedMovie = async (movieId:number) => {
    try {
        const { data } = await api.get<ISelectedMovie>(`/movies/${movieId}?_embed=reviews`)
        return data
    } catch (error) {
        return false
    }
}

interface IAtemptAddRatingProps{
    token: string
    ratingData: IRating
}

export const atemptAddRating = async ({token, ratingData}:IAtemptAddRatingProps) =>{
    try {
        const { data } = await api.post("/reviews", ratingData,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data
    } catch (error) {
        return false
    }
}

interface IAtemptEditRatingProps{
    token: string
    ratingData: IRating
    ratingId: number
}

export const atemptEditRating = async ({token, ratingData, ratingId}:IAtemptEditRatingProps) => {
    try {
        const { data } = await api.put(`/reviews/${ratingId}`, ratingData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data
    } catch (error) {
        return false
    }
}

interface IAtemptDeleteRatingProps{
    token: string
    ratingId: number
}

export const atemptDeleteRating = async ({token, ratingId}:IAtemptDeleteRatingProps) =>{
    try {
        await api.delete(`/reviews/${ratingId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return true
    } catch (error) {
        return false
    }
}