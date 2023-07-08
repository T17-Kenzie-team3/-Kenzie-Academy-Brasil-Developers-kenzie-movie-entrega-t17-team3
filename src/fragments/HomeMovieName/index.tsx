import { useContext } from "react"
import { MovieContext } from "../../providers/MovieContext"
import { StyledHomeMovieName } from "./style"
import { StyledTitleOne, StyledTitleThree} from "../../styles/typography/typography"
import { AiOutlineStar } from "react-icons/ai"
import { StyledStarRating } from "../StarRating/style"

export const HomeMovieName = () => {

  
  const { movieList, getAverageScoresByMovieId } = useContext(MovieContext)
  const averageScore = getAverageScoresByMovieId(movieList[0].id)
  return (
    <>
      {movieList && (
        <StyledHomeMovieName className="divName">
          <StyledTitleOne className="name">{movieList[0].name}</StyledTitleOne>
          <StyledStarRating>
            <AiOutlineStar fill="#FFBB38" size="35px" />
            <StyledTitleThree className="score">
              {averageScore.toFixed(1)}</StyledTitleThree>
          </StyledStarRating>
        </StyledHomeMovieName>
      )}
    </>
  )
}
