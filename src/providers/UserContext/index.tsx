import { createContext, useEffect, useState } from "react"
import {
  IUserContext,
  IUserProviderProps,
  IUserData,
  IUser,
} from "./@types"
import { useNavigate } from "react-router-dom"
import { getAllUsers } from "../../services/requests"

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [userData, setUserData] = useState<IUserData | null>(null)
  const [userList, setUserDataList] = useState<IUser[]>([])
  const [loadingPage, setLoadingPage] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)


  const navigate = useNavigate()
  const user = userData?.user
  
  const currentPath = window.location.pathname

  useEffect(() => {
    const storedUser = localStorage.getItem("@KM: User")

    const loadUser = () => {
      if (storedUser === null) {
        return null
      } else {
        const user = JSON.parse(storedUser)
        setUserData(user)
        navigate(currentPath)
      }
    }
    loadUser()

    const userList = async () => {
      const newUserList = await getAllUsers()
      if(newUserList){
        setUserDataList(newUserList)
      }
    }

    userList()
  }, [])

  return (
    <UserContext.Provider
      value={{
        user,
        userData,
        setUserData,
        navigate,
        currentPath,
        loadingPage,
        setLoadingPage,
        userList,
        setUserDataList,
        isModalOpen, 
        setIsModalOpen
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
