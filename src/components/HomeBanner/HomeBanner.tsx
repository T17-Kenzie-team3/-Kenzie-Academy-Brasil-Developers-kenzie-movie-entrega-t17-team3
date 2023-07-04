import { HomeMovieName } from "../../fragments/HomeMovieName"
import { HomeMovieTag } from "../../fragments/HomeTag"

export const HomeBanner = () => {
    return (
        <section>
            <img src="" alt="Display principal com a foto de um filme" />
            <div>
                <HomeMovieTag />
                <HomeMovieName />
            </div>
        </section>
    )
}