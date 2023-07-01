import { createContext, useState } from "react"
import { IUserContext, IUserProviderProps, IUserData, IUserRating } from "./@types"

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {

    const [user, setUser] = useState<IUserData | null>(null)
    const [userRating, setUserRating] = useState<IUserRating | null >(null)

    return(
        <UserContext.Provider value={{user, setUser, userRating, setUserRating}}>
            {children}
        </UserContext.Provider>
    )
}
