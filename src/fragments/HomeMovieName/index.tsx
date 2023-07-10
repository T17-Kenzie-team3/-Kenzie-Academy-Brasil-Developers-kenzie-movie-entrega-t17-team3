import { useContext } from "react"
import { MovieContext } from "../../providers/MovieContext"
import { StyledHomeMovieName } from "./style"
import {
  StyledTitleOne,
  StyledTitleThree,
} from "../../styles/typography/typography"
import { AiOutlineStar } from "react-icons/ai"
import { StyledStarRating } from "../StarRating/style"
import { UserContext } from "../../providers/UserContext"

export const HomeMovieName = () => {
  const { currentPath } = useContext(UserContext)
  const { movieList, selectedMovie, getAverageScoresByMovieId } =
    useContext(MovieContext)
    const score = getAverageScoresByMovieId(
      (currentPath !== "/" ? selectedMovie!.id : movieList[0].id)
    )
  return (
    <>
      {movieList && (
        <StyledHomeMovieName className="divName">
          <StyledTitleOne className="name">
            {currentPath !== "/" ? selectedMovie!.name : movieList[0].name}
          </StyledTitleOne>
          <StyledStarRating>
            <AiOutlineStar fill="#FFBB38" size="35px" />
            <StyledTitleThree className="score">
              {(+score | 0).toFixed(1)}
            </StyledTitleThree>
          </StyledStarRating>
        </StyledHomeMovieName>
      )}
    </>
  )
}
