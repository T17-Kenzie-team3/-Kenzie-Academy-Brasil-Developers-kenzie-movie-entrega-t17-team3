import { useContext } from "react"
import { AiOutlineStar } from "react-icons/ai"
import { MovieContext } from "../../providers/MovieContext"

export const StarRating = () => {
  
  const { movieList, averageScores } = useContext(MovieContext)
  const averageScore = averageScores.find(
    (score) => score.movieId === movieList[0].id
  )

  return (
    <div>
      <AiOutlineStar />
      {averageScore && <p>{averageScore.score}</p>}
    </div>
  )
}
