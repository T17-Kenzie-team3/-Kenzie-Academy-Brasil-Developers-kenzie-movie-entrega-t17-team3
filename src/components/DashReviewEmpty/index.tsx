import ReactModal from "react-modal"
import { ModalAddReview } from "../Modal/ModalAddReview"
import { useContext, useState } from "react"
import { UserContext } from "../../providers/UserContext"
import { StyledDashReviewEmpty } from "./style"
import { StyledTitleOne} from "../../styles/typography/typography"
import { AiOutlineStar } from "react-icons/ai"
import { StyledBtnRatingUpdate } from "../../styles/buttons/button"
        
export const DashReviewEmpty = () => {
  const { user } = useContext(UserContext)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
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
        <ModalAddReview onClose={closeModal} />
      </ReactModal>
    </StyledDashReviewEmpty>
  )
}