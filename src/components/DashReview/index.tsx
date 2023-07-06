import { useContext, useEffect, useState } from "react"
import { AiOutlineStar } from "react-icons/ai"
import { MovieContext } from "../../providers/MovieContext"
import { ImPencil } from "react-icons/im"
import { BsTrashFill } from "react-icons/bs"
import { IUserReview } from "../../providers/UserContext/@types"
import { UserContext } from "../../providers/UserContext"
import { DashReviewEmpty } from "../DashReviewEmpty"
import { ModalEdit } from "../Modal/ModalEdit"
import ReactModal from "react-modal"
import { atemptDeleteReview, atemptEditReview } from "../../services/requests"
import { IReview } from "../../providers/MovieContext/@types"
import { StyledDashReview } from "./style"
import { StyledTitleOne, Styledlabel } from "../../styles/typography/typography"

export const DashReview = () => {
  const { selectedMovie } = useContext(MovieContext)
  const { user } = useContext(UserContext)
  const [movieReviews, setMovieReviews] = useState<IUserReview[] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedReview, setSelectedReview] = useState<IUserReview | null>(null)

  const openModal = (review: IUserReview) => {
    setSelectedReview(review)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleDelete = async (id: number) => {
    if (user?.accessToken) {
      await atemptDeleteReview({ token: user.accessToken, reviewId: id })
      const updatedReviews =
        movieReviews?.filter((review) => review.id !== id) ?? []
      setMovieReviews(updatedReviews)
    }
  }

  const handleEdit = async (reviewData: IReview) => {
    if (user?.accessToken && selectedReview) {
      const updatedReview = await atemptEditReview({
        token: user.accessToken,
        reviewData: reviewData,
        reviewId: selectedReview.id,
      })
      setMovieReviews((prevReviews) =>
        prevReviews
          ? prevReviews.map((review) =>
              review.id === updatedReview.id ? updatedReview : review
            )
          : null
      )
      closeModal()
    }
  }

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
  }, [])

  return (
    <StyledDashReview>
      {movieReviews && movieReviews.length > 0 && (
        <>
          <div className="divEvaluation">
            <StyledTitleOne >Avaliações</StyledTitleOne>
            <Styledlabel htmlFor="user-review">Sua Avaliação</Styledlabel>
          </div>
        </>
      )}

      {movieReviews && movieReviews.length > 0 ? (
        movieReviews.map((review) => (
          <div key={review.id}>
            <p>{review.description}</p>
            <div>
              <div>
                <AiOutlineStar />
                <p>{review.score}</p>
              </div>
              <button onClick={() => openModal(review)}>
                <ImPencil />
              </button>
              <button onClick={() => handleDelete(review.id)}>
                <BsTrashFill />
              </button>
            </div>
          </div>
        ))
      ) : (
        <DashReviewEmpty />
      )}
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal__content"
        overlayClassName="custom-overlay"
      >
        <ModalEdit onSave={handleEdit} onClose={closeModal} />
      </ReactModal>
    </StyledDashReview>
  )
}
