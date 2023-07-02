import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { DashboardPage } from "../pages/DashboardPage"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { useContext } from "react"
import { MovieContext } from "../providers/MovieContext"

export const RoutesMain = () => {

    const { movieList } = useContext(MovieContext)
    
    return (
        <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="/login" element={ <LoginPage /> }/>
            <Route path="/register" element={ <RegisterPage /> }/>
            <Route path="/dashboard" element={ <DashboardPage /> }/>
            {movieList.map(movie => {
                const endPoint = movie.name.replace(/\s+/g, "").toLowerCase()
                return (
                    <Route path={`/${endPoint}`} element={ <DashboardPage /> } key={movie.id}/>
                )
            })}
        </Routes>
    )
}