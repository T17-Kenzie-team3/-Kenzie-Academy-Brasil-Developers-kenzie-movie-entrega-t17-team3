import ReactModal from "react-modal"
import { ModalAddReview } from "../Modal/ModalAddReview"
import { useContext, useState } from "react"
import { UserContext } from "../../providers/UserContext"
import { AiOutlineStar } from "react-icons/ai"

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
    <section>
      <h1>Avaliações</h1>
      {user ? (
        <button onClick={openModal}>
          <AiOutlineStar /> Avaliar
        </button>
      ) : null}

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal__content"
        overlayClassName="custom-overlay"
      >
        <ModalAddReview onClose={closeModal} />
      </ReactModal>
    </section>
  )
}
