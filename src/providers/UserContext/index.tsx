import { createContext, useEffect, useState } from "react"
import { IUserContext, IUserProviderProps, IUserData, IUserReview, IUserName } from "./@types"
import { useNavigate } from "react-router-dom"
import { getAllUsers } from "../../services/requests"


export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {

    const [user, setUser] = useState<IUserData | null>(null)
    const [userReview, setUserReview] = useState<IUserReview | null>(null)
    const [loadingPage, setLoadingPage] = useState(false)
    const [userNameList, setUserNameList] = useState<IUserName[]>([])
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

        const userList = async () => {

            const newUserList = await getAllUsers()
            let currentUserList: IUserName[] = []
            if(newUserList){
                newUserList.map(userText => {
                    const userTextData:IUserName ={
                        firstLetter: userText.name.charAt(0),
                        name: userText.name
                    }
                    currentUserList.push(userTextData)
                })
            }
        }
        userList()
    }, [])

    return (
        <UserContext.Provider value={{
            user, setUser, userReview, setUserReview,
            navigate, currentPath, loadingPage, setLoadingPage,
            userNameList, setUserNameList
        }}>
            {children}
        </UserContext.Provider>
    )
}
