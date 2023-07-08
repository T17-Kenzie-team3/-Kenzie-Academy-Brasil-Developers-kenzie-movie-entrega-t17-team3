import ReactModal from "react-modal"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { StyledDashReviewEmpty } from "./style"
import { StyledTitleOne } from "../../styles/typography/typography"
import { AiOutlineStar } from "react-icons/ai"
import { StyledBtnRatingUpdate } from "../../styles/buttons/button"
import { atemptAddReview } from "../../services/requests"
import { MovieContext } from "../../providers/MovieContext"
import { ModalAddReview } from "../Modal/ModalAddReview"
import { IReview } from "../../providers/MovieContext/@types"

export const DashReviewEmpty = () => {
  
  const { setReviews } = useContext(MovieContext)
  const { user, userData,  isModalOpen, setIsModalOpen } = useContext(UserContext)
  

  const handleAddACard = async (reviewData: IReview) => {
    if (userData) {
      const data = await atemptAddReview({
        token: userData.accessToken,
        reviewData: reviewData,
      })
      setReviews((reviews) => reviews.map(review => {
        if(review.id === data.id){
          return { ...review, score: data.score};
        } else {
          return review;
        }
      }))
      setIsModalOpen(false)
    }
  }

  return (
    <StyledDashReviewEmpty>
      <StyledTitleOne>Avaliações</StyledTitleOne>
      {user ? (
        <StyledBtnRatingUpdate onClick={() => setIsModalOpen(true)}>
          <AiOutlineStar fill="#000" size="35px" />
          <span>Avaliar</span>
        </StyledBtnRatingUpdate>
      ) : null}

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="modal__content"
        overlayClassName="custom-overlay"
      >
        <ModalAddReview onUpdate={handleAddACard} 
        onClose={() => setIsModalOpen(true)} />
      </ReactModal>
    </StyledDashReviewEmpty>
  )
}
