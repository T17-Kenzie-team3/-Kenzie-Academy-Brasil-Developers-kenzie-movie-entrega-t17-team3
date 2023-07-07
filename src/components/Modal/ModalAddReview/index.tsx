import { AiOutlineStar } from "react-icons/ai"
import { atemptAddReview } from "../../../services/requests"
import { useForm } from "react-hook-form"
import { MovieContext } from "../../../providers/MovieContext"
import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext"
import { IReview, TMovieScore } from "../../../providers/MovieContext/@types"
import {StyledModalAddReview}from "./style"
import { StyledBtnRatingUpdate } from "../../../styles/buttons/button"
import{StyledSelectModal} from "../../../styles/select/select"
import {StyledTextareaModal } from "../../../styles/textarea/textarea"
import { StyledTitleOne } from "../../../styles/typography/typography"

interface ModalAddProps {
  onClose: () => void}

export const ModalAddReview = ({ onClose }: ModalAddProps) => {
  const { selectedMovie } = useContext(MovieContext)
  const { user } = useContext(UserContext)

  const token = user?.accessToken

  const { register, handleSubmit, reset } = useForm<IReview>()

  const onSubmit = async (data: IReview) => {
    const formData: IReview = {
      ...data,
      userId: user?.user.id ?? 0,
      movieId: selectedMovie?.id ?? 0,
      score: Number(data.score) as TMovieScore,
    }

    const newReview = await atemptAddReview({
      token: token ?? "",
      reviewData: formData,
    })
    reset()
    onClose()
  }

  return (
    <StyledModalAddReview>
      <div className="modalBox">
        <StyledTitleOne>Avaliação</StyledTitleOne>
        <button className="modalBtnClose" onClick={onClose}>X</button>

      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledSelectModal {...register("score")}>
          <option value="">Selecione uma nota</option>
          {[...Array(11)].map((_, index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </StyledSelectModal>

        <StyledTextareaModal 
          placeholder="Deixe um comentário"
          {...register("description")}
        ></StyledTextareaModal>

        <StyledBtnRatingUpdate type="submit">
          <AiOutlineStar /> Avaliar
        </StyledBtnRatingUpdate>
      </form>

      </div>
    </StyledModalAddReview>
  )
}
