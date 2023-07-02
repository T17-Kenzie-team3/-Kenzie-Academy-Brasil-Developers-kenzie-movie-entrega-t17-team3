import { createContext, useState } from "react"
import { IUserContext, IUserProviderProps, IUserData, IUserReview } from "./@types"
import { useNavigate } from "react-router-dom"

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {

    const [user, setUser] = useState<IUserData | null>(null)
    const [userReview, setUserReview] = useState<IUserReview | null >(null)
    const navigate = useNavigate()
    const currentPath = window.location.pathname

    return(
        <UserContext.Provider value={{user, setUser, userReview, setUserReview,
        navigate, currentPath }}>
            {children}
        </UserContext.Provider>
    )
}
