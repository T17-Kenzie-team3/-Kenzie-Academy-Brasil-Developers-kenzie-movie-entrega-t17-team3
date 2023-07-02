import { createContext, useEffect, useState } from "react"
import { IUserContext, IUserProviderProps, IUserData, IUserReview } from "./@types"
import { useNavigate } from "react-router-dom"


export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {

    const [user, setUser] = useState<IUserData | null>(null)
    const [userReview, setUserReview] = useState<IUserReview | null >(null)

    localStorage.setItem("@KM: User", JSON.stringify(user))

    const navigate = useNavigate()
    const currentPath = window.location.pathname

    useEffect(()=>{

        const fakeUser = {
            accessToken: "token number 1",
            user: {
                email: "a@a.com",
                name: "samuel",
                id: 99
            }
        }

        const storedUser = JSON.stringify(fakeUser)//localStorage.getItem("@KM: User")

        const loadUser = () => {
            if(storedUser === null) {
                return null
            } else {
                const userData = JSON.parse(storedUser)
                setUser(userData)
                navigate(currentPath)
            }
        }
        loadUser()
    },[])

    return(
        <UserContext.Provider value={{user, setUser, userReview, setUserReview,
        navigate, currentPath }}>
            {children}
        </UserContext.Provider>
    )
}
