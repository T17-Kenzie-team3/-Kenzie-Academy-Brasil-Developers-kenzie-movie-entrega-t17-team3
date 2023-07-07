import { AiOutlineStar } from "react-icons/ai"
import { atemptAddReview } from "../../../services/requests"
import { useForm } from "react-hook-form"
import { MovieContext } from "../../../providers/MovieContext"
import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext"
import { IReview, TMovieScore } from "../../../providers/MovieContext/@types"

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
    <div>
      <div>
        <h2>Avaliação</h2>
        <button onClick={onClose}>X</button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("score")}>
          <option value="">Selecione uma nota</option>
          {[...Array(11)].map((_, index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </select>

        <textarea
          placeholder="Deixe um comentário"
          {...register("description")}
        ></textarea>

        <button type="submit">
          <AiOutlineStar /> Avaliar
        </button>
      </form>
    </div>
  )
}