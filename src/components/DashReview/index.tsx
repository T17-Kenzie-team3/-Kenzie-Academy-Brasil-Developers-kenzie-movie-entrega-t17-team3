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
import {
  StyledParagrOne,
  StyledTitleOne,
  StyledTitleTwo,
  Styledlabel,
} from "../../styles/typography/typography"
import { StyledStarRating } from "../../fragments/StarRating/style"

export const DashReview = () => {
  const { selectedMovie, setSelectedMovie } = useContext(MovieContext)
  const { user, userReviews, setUserDataReviews } = useContext(UserContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedReview, setSelectedReview] = useState<IUserReview | null>(null)
  const [editData, setEditData] = useState<IReview>({
    score: 0,
    description: "",
    userId: 0,
    movieId: 0,
  })

  const openModal = (review: IUserReview) => {
    setSelectedReview(review)
    setEditData({
      score: review.score,
      description: review.description,
      userId: review.userId,
      movieId: review.movieId,
    })
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleDelete = async (id: number) => {
    if (user?.accessToken) {
      await atemptDeleteReview({ token: user.accessToken, reviewId: id })
      const updatedReviews =
        userReviews?.filter((review) => review.id !== id) ?? []
      setUserDataReviews(updatedReviews)
    }
  }

  const handleEdit = async (reviewData: IReview) => {
    if (user?.accessToken && selectedReview && selectedMovie) {
      const updatedReview = await atemptEditReview({
        token: user.accessToken,
        reviewData: reviewData,
        reviewId: selectedReview.id,
      })

      setUserDataReviews((prevReviews) =>
        prevReviews
          ? prevReviews.map((review) =>
              review.id === updatedReview.id ? updatedReview : review
            )
          : []
      )

      const updatedReviews = selectedMovie.reviews.map((review) =>
        review.id === updatedReview.id ? updatedReview : review
      )

      const updatedMovie = {
        ...selectedMovie,
        reviews: updatedReviews,
      }
      setSelectedMovie(updatedMovie)
      closeModal()
    }
  }

  useEffect(() => {
    const getMovieReviews = () => {
      if (selectedMovie) {
        const reviews = selectedMovie.reviews.filter(
          (review) => review.userId === user?.user.id
        )
        setUserDataReviews(reviews)
      }
    }

    getMovieReviews()
  }, [])

  return (
    <StyledDashReview>
      {userReviews && userReviews.length > 0 && (
        <>
          <div className="divEvaluation">
            <StyledTitleOne>Avaliações</StyledTitleOne>
            <Styledlabel htmlFor="user-review">Sua Avaliação</Styledlabel>
          </div>
        </>
      )}

      {userReviews && userReviews.length > 0 ? (
        userReviews.map((review) => (
          <div key={review.id} className="reviewContainer">
            <StyledParagrOne>{review.description}</StyledParagrOne>
            <div className="reviewButtonsContainer">
              <StyledStarRating>
                <AiOutlineStar fill="#FFBB38" size="38px" />
                <StyledTitleTwo>{review.score}</StyledTitleTwo>
              </StyledStarRating>
              <button onClick={() => openModal(review)}>
                <ImPencil fill="#FFBB38" size="38px" />
              </button>
              <button onClick={() => handleDelete(review.id)}>
                <BsTrashFill fill="#FFBB38" size="35px" />
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
        <ModalEdit
          initialReviewData={editData}
          onSave={handleEdit}
          onClose={closeModal}
        />
      </ReactModal>
    </StyledDashReview>
  )
}
