import { AiOutlineStar } from "react-icons/ai"
import { useForm } from "react-hook-form"
import { MovieContext } from "../../../providers/MovieContext"
import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext"
import { IReview, TMovieScore } from "../../../providers/MovieContext/@types"
import { zodResolver } from "@hookform/resolvers/zod"
import { AddReviewSchema } from "./Schema/AddReviewSchema"
import { StyledErrorZod } from "../../../styles/typography/typography"

interface ModalAddProps {
  onUpdate: (reviewData: IReview) => Promise<void>
  onClose: () => void
}

export const ModalAddReview = ({ onUpdate, onClose }: ModalAddProps) => {
  const { selectedMovie } = useContext(MovieContext)
  const { user } = useContext(UserContext)
  const { register, handleSubmit, reset } = useForm<IReview>()

  const token = user?.accessToken

  const { register, handleSubmit, reset, formState: { errors } } = useForm<IReview>({
    resolver: zodResolver(AddReviewSchema),
})


  const onSubmit = async (data: IReview) => {
    const formData: IReview = {
      ...data,
      userId: user?.user.id ?? 0,
      movieId: selectedMovie?.id ?? 0,
      score: Number(data.score) as TMovieScore,
    }
    await onUpdate(formData)

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
        {errors.score ? <StyledErrorZod>{errors.score.message}</StyledErrorZod> : null}

        <textarea
          placeholder="Deixe um comentário"
          {...register("description")}
        ></textarea>
        {errors.description ? <StyledErrorZod>{errors.description.message}</StyledErrorZod> : null}
        
        <button type="submit">
          <AiOutlineStar /> Avaliar
        </button>
      </form>
    </div>
  )
}
