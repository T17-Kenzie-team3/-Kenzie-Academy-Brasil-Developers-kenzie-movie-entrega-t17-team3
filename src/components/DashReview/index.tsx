import { useContext, useEffect, useState } from "react"
import { AiOutlineStar } from "react-icons/ai"
import { MovieContext } from "../../providers/MovieContext"
import { ImPencil } from "react-icons/im"
import { BsTrashFill } from "react-icons/bs"
import { IUserReview } from "../../providers/UserContext/@types"
import { UserContext } from "../../providers/UserContext"
import { DashReviewEmpty } from "../DashReviewEmpty"

export const DashReview = () => {
  const { selectedMovie } = useContext(MovieContext)
  const { user } = useContext(UserContext)
  const [movieReviews, setMovieReviews] = useState<IUserReview[] | null>(null)

  useEffect(() => {
    const getMovieReviews = () => {
      if (selectedMovie) {
        const reviews = selectedMovie.reviews.filter(
          (review) => review.userId === user?.user.id
        )

        setMovieReviews(reviews as IUserReview[])
      }
    }

    getMovieReviews()
  }, [selectedMovie])


  return (
    <section>
      {movieReviews && movieReviews.length > 0 ? (
        <>
          <h1>Avaliações</h1>
          <label htmlFor="user-review">Sua Avaliação</label>
        </>
      ) : null}

      {movieReviews && movieReviews.length > 0 ? (
        movieReviews.map((movie) => (
          <div key={movie.id}>
            <p>{movie.description}</p>
            <div>
              <div>
                <AiOutlineStar />
                <p>{movie.score}</p>
              </div>
              <button>
                <ImPencil />
              </button>
              <button>
                <BsTrashFill />
              </button>
            </div>
          </div>
        ))
      ) : (
        <DashReviewEmpty />
      )}
      
    </section>
  );
  
}
