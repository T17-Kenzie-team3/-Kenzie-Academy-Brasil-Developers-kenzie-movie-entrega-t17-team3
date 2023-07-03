import { createContext, useEffect, useState } from "react"
import { IUserContext, IUserProviderProps, IUser, IUserData, IUserReview } from "./@types"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { TLoginValues } from "../../components/LoginForm/Schema/LoginFormSchema"
import { TRegisterValues } from "../../components/RegisterForm/Schema/RegisterFormSchema"


export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {

    const [user, setUser] = useState<IUser | null>(null)
    const [userReview, setUserReview] = useState<IUserReview | null>(null)
    const [loadingPage, setLoadingPage] = useState(false)

    const navigate = useNavigate()
    const currentPath = window.location.pathname

    useEffect(() => {
        const loadUser = async () => {
          try {
            const token = localStorage.getItem("@KM: User")
            const id = localStorage.getItem("@KM: UserId")
            if (token) {
              api.defaults.headers.common.authorization = `Bearer ${token}`
              const { data: userData } = await api.get(`/users/${id}`)
              setUser(userData)
            }
          } catch (error) {
            console.error(error);
            localStorage.removeItem("@KM: User")
            localStorage.removeItem("@KM: UserId")
          }
        };
        loadUser()
      }, [])

    const userRegister = async (formData: TRegisterValues) => {
        try {
           const { data } = await api.post("/users", formData)
           console.log(data)
           navigate("/login");
        } catch (error) {
            console.log(error)
        }
    }

    const userLogin = async (formData: TLoginValues) => {
        try {
            api
              .post<IUserData>("signin", formData)
              .then((response) => {
                const userInfo = response.data;
                api.defaults.headers.common.authorization = `Bearer ${userInfo.accessToken}`;
                localStorage.setItem("@KM: User", userInfo.accessToken);
                localStorage.setItem("@KM: UserId", JSON.stringify(userInfo.user.id));
                setUser(userInfo.user);
                navigate("/");
                return userInfo;
            }); 

          } catch (error) {
            console.log(error);
          }
        
    }

    const userLogout = async () => {
        try {
            localStorage.removeItem("@KM: User")
            localStorage.removeItem("@KM: UserId")
            setUser(null)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <UserContext.Provider value={{
            user, setUser, userReview, setUserReview,
            navigate, currentPath, loadingPage, setLoadingPage,
            userRegister, userLogin, userLogout,
        }}>
            {children}
        </UserContext.Provider>
    )
}
