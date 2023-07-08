import { IMovie, IReview } from "../providers/MovieContext/@types"
import { IUser, IUserData } from "../providers/UserContext/@types"
import { api } from "./api"

interface IAtemptLoginProp {
    email: string
    password: string
}

export const atemptLogin = async ({ email, password }: IAtemptLoginProp) => {
    try {
        const { data } = await api.post<IUserData>("/login", {
            email: email,
            password: password,
        })
        return data
    } catch (error) {
        return false
    }
}

interface IAtemptRegisterProp {
    email: string
    password: string
    name: string
}

export const atemptRegister = async ({ email, password, name }: IAtemptRegisterProp) => {
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

export const getAllUsers = async () => {
    try {
        const { data } = await api.get<IUser[]>("/users")
        return data
    } catch (error) {
        return false
    }
}

interface IGetUserReviewsByMovieIDProps {
    userId: number
    movieId: number
}

export const getUserReviewsByMovieID = async ({ userId, movieId }: IGetUserReviewsByMovieIDProps) => {
    try {
        const { data } = await api.get<IReview[]>(`/movies/${movieId}/reviews?userId=${userId}`)
        return data
    } catch (error) {
        return false
    }
}

export const getMovieList = async () => {
    try {
        const { data } = await api.get<IMovie[]>("/movies?_embed=reviews")
        return data
    } catch (error) {
        return false
    }
}

export const getSelectedMovie = async (movieId: number) => {
    try {
        const { data } = await api.get<IMovie>(`/movies/${movieId}?_embed=reviews`)
        return data
    } catch (error) {
        return false
    }
}

interface IAtemptAddReviewProps {
    token: string
    reviewData: IReviewData
}

export interface IReviewData{
    movieId: number
    userId: number
    score: number
    description: string
}

export const atemptAddReview = async ({ token, reviewData }: IAtemptAddReviewProps) => {
    try {
        const { data } = await api.post("/reviews", reviewData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data
    } catch (error) {
        return false
    }
}

interface IAtemptEditReviewProps {
    token: string
    reviewData: IReview
}

export const atemptEditReview = async ({ token, reviewData }: IAtemptEditReviewProps) => {
    try {
        const { data } = await api.put(`/reviews/${reviewData.movieId}`, reviewData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data
    } catch (error) {
        return false
    }
}

export interface IAtemptDeleteReviewProps {
    token: string
    reviewId: number
}

export const atemptDeleteReview = async ({ token, reviewId }: IAtemptDeleteReviewProps) => {
    try {
        await api.delete(`/reviews/${reviewId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return true
    } catch (error) {
        return false
    }
}

export const removeSpaces = (string: string) => {
    if(string === undefined){
        return ""
    }
    const stringWithoutSpaces = string.replace(/\s+/g, "").toLowerCase()
    return stringWithoutSpaces
}

export const isObjEmpty = (object: {}) => {
    return Object.keys(object).length === 0
}