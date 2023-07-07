import ReactModal from "react-modal"
import { useContext, useState } from "react"
import { UserContext } from "../../providers/UserContext"
import { StyledDashReviewEmpty } from "./style"
import { StyledTitleOne } from "../../styles/typography/typography"
import { AiOutlineStar } from "react-icons/ai"
import { StyledBtnRatingUpdate } from "../../styles/buttons/button"
import { IReview } from "../../providers/MovieContext/@types"
import { atemptAddReview } from "../../services/requests"
import { MovieContext } from "../../providers/MovieContext"
import { ModalAddReview } from "../Modal/ModalAddReview"

export const DashReviewEmpty = () => {
  const { user } = useContext(UserContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { selectedMovie, setSelectedMovie } = useContext(MovieContext)
  const { setUserReviews } = useContext(UserContext)
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleUpdate = async (reviewData: IReview) => {
    if (user?.accessToken) {
      const updatedReview = await atemptAddReview({
        token: user.accessToken,
        reviewData: reviewData,
      })

      setUserReviews((prevReviews) => {
        const updatedReviews = prevReviews
          ? prevReviews.filter((review) => review.id !== updatedReview.id)
          : []
        return [...updatedReviews, updatedReview]
      })
      if (selectedMovie) {
        const updatedReviews = selectedMovie.reviews.map((review) =>
          review.id === updatedReview.id ? updatedReview : review
        )

        const updatedMovie = {
          ...selectedMovie,
          reviews: updatedReviews,
        }

        setSelectedMovie(updatedMovie)
      }
      closeModal()
    }
  }

  return (
    <StyledDashReviewEmpty>
      <StyledTitleOne>Avaliações</StyledTitleOne>
      {user ? (
        <StyledBtnRatingUpdate onClick={openModal}>
          <AiOutlineStar fill="#000" size="35px" />
          <span>Avaliar</span>
        </StyledBtnRatingUpdate>
      ) : null}

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal__content"
        overlayClassName="custom-overlay"
      >
        <ModalAddReview onUpdate={handleUpdate} onClose={closeModal} />
      </ReactModal>
    </StyledDashReviewEmpty>
  )
}
