import ReactModal from "react-modal"
import { useContext, useState } from "react"
import { UserContext } from "../../providers/UserContext"
import { StyledDashReviewEmpty } from "./style"
import { StyledTitleOne } from "../../styles/typography/typography"
import { AiOutlineStar } from "react-icons/ai"
import { StyledBtnRatingUpdate } from "../../styles/buttons/button"
import { atemptAddReview } from "../../services/requests"
import { MovieContext } from "../../providers/MovieContext"
import { ModalAddReview } from "../Modal/ModalAddReview"
import { IReview } from "../../providers/MovieContext/@types"
import { toast } from "react-toastify"

export const DashReviewEmpty = () => {
  const { setReviews, userHaveAReview } = useContext(MovieContext)
  const { userData } = useContext(UserContext)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const handleAddACard = async (reviewData: IReview) => {
    if (userData) {
      const data = await atemptAddReview({
        token: userData.accessToken,
        reviewData: reviewData,
      })
      setReviews((reviews) => [...reviews, data])
      setIsAddModalOpen(false)
      toast.success("Avalição adicionada com sucesso!")
    }
  }

  

  return (
    <StyledDashReviewEmpty>
      <StyledTitleOne>Avaliações</StyledTitleOne>
        <StyledBtnRatingUpdate onClick={() => setIsAddModalOpen(true)}>
          <AiOutlineStar fill="#171717" size="35px" />
          <span>Avaliar</span>
        </StyledBtnRatingUpdate>
      

      <ReactModal
        isOpen={isAddModalOpen}
        onRequestClose={() => setIsAddModalOpen(false)}
        className="modal__content"
        overlayClassName="custom-overlay"
      >
        <ModalAddReview
          onUpdate={handleAddACard}
          onClose={() => setIsAddModalOpen(true)}
        />
      </ReactModal>
    </StyledDashReviewEmpty>
  )
}
