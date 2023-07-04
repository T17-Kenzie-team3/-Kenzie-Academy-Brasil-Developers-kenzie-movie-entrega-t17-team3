import { useContext } from "react"
import { UserContext } from "../providers/UserContext"
import { Navigate, Outlet } from "react-router-dom"
import { MovieContext } from "../providers/MovieContext"
import { removeSpaces } from "../services/requests"

export const ProtectedRoutes = () => {
    const { user } = useContext(UserContext)
    const { selectedMovie } = useContext(MovieContext)

    if(!user){
        return(
            <Outlet />
        )
    } else if (selectedMovie){
        return(
            <Navigate to={`/${removeSpaces(selectedMovie.name)}`} />
        )

    } else {
        return(
            <Navigate to={"/"} />
        )
    }
}