import { useContext, useState } from "react"
import { AiOutlineStar } from "react-icons/ai"
import { MovieContext } from "../../providers/MovieContext"
import { ImPencil } from "react-icons/im"
import { BsTrashFill } from "react-icons/bs"
import { UserContext } from "../../providers/UserContext"
import { DashReviewEmpty } from "../DashReviewEmpty"
import { ModalEdit } from "../Modal/ModalEdit"
import ReactModal from "react-modal"
import { atemptDeleteReview, atemptEditReview } from "../../services/requests"
import { StyledDashReview } from "./style"
import {
  StyledParagrOne,
  StyledTitleOne,
  StyledTitleTwo,
  Styledlabel,
} from "../../styles/typography/typography"
import { StyledStarRating } from "../../fragments/StarRating/style"
import { IReview } from "../../providers/MovieContext/@types"
import { toast } from "react-toastify"

export const DashReview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { reviews, setReviews, userHaveAReview } = useContext(MovieContext)
  const { userData } = useContext(UserContext)

  const handleDelete = async (reviewId: number) => {
    if (userData) {
      await atemptDeleteReview({
        token: userData.accessToken,
        reviewId: reviewId,
      })
      const filteredReviews = reviews.filter((review) => review.id !== reviewId)
      setReviews(filteredReviews)
    }
    toast.success("Avalição removida com sucesso!")
  }

  const handleEdit = async (reviewData: IReview) => {
    if (userData) {
      const newReview = await atemptEditReview({
        token: userData.accessToken,
        reviewData: reviewData,
      })
      try {
        setReviews((reviews) =>
        reviews.map((review) => {
          if (review.id === newReview.id) {
            toast.success("Avalição editada com sucesso!")
            return {
              ...review,
              score: newReview.score,
              description: newReview.description,
            }
            } else {
              return review
            }
          })
        )
      } catch (error) {}
    }
  }

  const userReview = userHaveAReview()? userHaveAReview() : undefined

  return (
    <StyledDashReview>
      {userReview && (
        <>
          <div className="divEvaluation">
            <StyledTitleOne>Avaliações</StyledTitleOne>
            <Styledlabel htmlFor="user-review">Sua Avaliação</Styledlabel>
          </div>
        </>
      )}

      {userReview ? (
        <div className="reviewContainer">
          <StyledParagrOne>{userReview.description}</StyledParagrOne>
          <div className="reviewButtonsContainer">
            <StyledStarRating>
              <AiOutlineStar fill="#FFBB38" size="38px" />
              <StyledTitleTwo>{userReview.score}</StyledTitleTwo>
            </StyledStarRating>
            <button onClick={() => setIsModalOpen(true)}>
              <ImPencil fill="#FFBB38" size="25px" />
            </button>
            <button onClick={() => handleDelete(userReview.id)}>
              <BsTrashFill fill="#FFBB38" size="25px" />
            </button>
          </div>
        </div>
      ) : (
        <DashReviewEmpty />
      )}
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="modal__content"
        overlayClassName="custom-overlay"
      >
        <ModalEdit onSave={handleEdit} onClose={() => setIsModalOpen(false)} />
      </ReactModal>
    </StyledDashReview>
  )
}
