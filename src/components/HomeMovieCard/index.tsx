import { HomeMovieName } from "../../fragments/HomeMovieName"
import { HomeMovieTag } from "../../fragments/HomeTag"

export const HomeMovieCard = () => {
    return (
        <li>
            <img src="" alt="Imagem do filme" />
            <HomeMovieTag />
            <HomeMovieName />
        </li>
    )
}