import { IMovie, IReview, ISelectedMovie } from "../providers/MovieContext/@types"
import { IUserData, IUserReview } from "../providers/UserContext/@types"
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
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
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
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        return false
    }
}

interface IGetUserReviewsByMovieIDProps {
    userId: number
    movieId: number
}

export const getUserReviewsByMovieID = async ({ userId, movieId }: IGetUserReviewsByMovieIDProps) => {
    try {
        const { data } = await api.get<IUserReview[]>(`/movies/${movieId}/reviews?userId=${userId}`)
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

export const getSelectedMovie = async (movieId: number) => {
    try {
        const { data } = await api.get<ISelectedMovie>(`/movies/${movieId}?_embed=reviews`)
        return data
    } catch (error) {
        return false
    }
}

interface IAtemptAddReviewProps {
    token: string
    reviewData: IReview
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
    reviewId: number
}

export const atemptEditReview = async ({ token, reviewData, reviewId }: IAtemptEditReviewProps) => {
    try {
        const { data } = await api.put(`/reviews/${reviewId}`, reviewData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data
    } catch (error) {
        return false
    }
}

interface IAtemptDeleteReviewProps {
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