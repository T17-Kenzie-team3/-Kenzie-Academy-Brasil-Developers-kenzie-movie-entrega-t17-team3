import { useContext } from "react"
import { AiOutlineStar } from "react-icons/ai"
import { MovieContext } from "../../providers/MovieContext"
import { StyledStarRating} from "./style"
import {StyledTitleThree  } from "../../styles/typography/typography"

export const StarRating = () => {

  const { movieList, getAverageScoresByMovieId } = useContext(MovieContext)
  const averageScore = getAverageScoresByMovieId(movieList[0].id)
  return (
    <StyledStarRating>
      <AiOutlineStar fill="#FFBB38" size="35px"/>
      {averageScore && <StyledTitleThree  className="score">{averageScore.score.toFixed(1)}</StyledTitleThree>}
    </StyledStarRating>
  )
}
