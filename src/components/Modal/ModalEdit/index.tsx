import { AiOutlineStar } from "react-icons/ai"
import { useForm } from "react-hook-form"
import { MovieContext } from "../../../providers/MovieContext"
import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext"
import { IReview, TMovieScore } from "../../../providers/MovieContext/@types"

interface ModalEditProps {
  onClose: () => void
  onSave: (reviewData: IReview) => Promise<void>
  initialReviewData: IReview
}

export const ModalEdit = ({
  onClose,
  onSave,
  initialReviewData,
}: ModalEditProps) => {
  const { setSelectedMovie, selectedMovie } = useContext(MovieContext)
  const { user } = useContext(UserContext)

  const { register, handleSubmit, reset } = useForm<IReview>({
    defaultValues: initialReviewData,
  })

  const onSubmit = (data: IReview) => {
    const formData: IReview = {
      ...data,
      userId: user?.user.id ?? 0,
      movieId: selectedMovie?.id ?? 0,
      score: Number(data.score) as TMovieScore,
    }
    reset()
    onClose()
    onSave(formData)
  }

  return (
    <div>
      <div>
        <h2>Editar Avaliação</h2>
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
          <AiOutlineStar /> Atualizar
        </button>
      </form>
    </div>
  )
}
