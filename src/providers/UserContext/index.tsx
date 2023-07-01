import { createContext, useState } from "react";

interface IUserProviderProps{
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

interface IUserContext{
    user: IUserData | null
    setUser: React.Dispatch<React.SetStateAction<IUserData | null>>
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {

    const [user, setUser] = useState<IUserData | null>(null)

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}