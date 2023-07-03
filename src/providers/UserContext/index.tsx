import { createContext, useEffect, useState } from "react"
import { IUserContext, IUserProviderProps, IUserData, IUserReview } from "./@types"
import { useNavigate } from "react-router-dom"


export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {

    const [user, setUser] = useState<IUserData | null>(null)
    const [userReview, setUserReview] = useState<IUserReview | null>(null)
    const [loadingPage, setLoadingPage] = useState(false)

    const navigate = useNavigate()
    const currentPath = window.location.pathname

    useEffect(() => {

        const storedUser = localStorage.getItem("@KM: User")

        const loadUser = () => {
            if (storedUser === null) {
                return null
            } else {
                const userData = JSON.parse(storedUser)
                setUser(userData)
                navigate(currentPath)
            }
        }
        loadUser()
    }, [])

    return (
        <UserContext.Provider value={{
            user, setUser, userReview, setUserReview,
            navigate, currentPath, loadingPage, setLoadingPage
        }}>
            {children}
        </UserContext.Provider>
    )
}
