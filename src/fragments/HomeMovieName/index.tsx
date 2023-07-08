import { useContext } from "react"
import { MovieContext } from "../../providers/MovieContext"
import { StyledHomeMovieName } from "./style"
import { StyledTitleOne, StyledTitleThree } from "../../styles/typography/typography"
import { AiOutlineStar } from "react-icons/ai"
import { StyledStarRating } from "../StarRating/style"

export const HomeMovieName = () => {


  const {
    movieList,
    selectedMovie,
    getAverageScoresByMovieId
  } = useContext(MovieContext)


  return (
    <>
      {movieList && (
        <StyledHomeMovieName className="divName">
          <StyledTitleOne className="name">{selectedMovie ? selectedMovie.name :
            movieList[0].name}</StyledTitleOne>
          <StyledStarRating>
            <AiOutlineStar fill="#FFBB38" size="35px" />
            <StyledTitleThree className="score">
              {getAverageScoresByMovieId(selectedMovie ? selectedMovie.id :
      movieList[0].id) & 0}</StyledTitleThree>
          </StyledStarRating>
        </StyledHomeMovieName>
      )}
    </>
  )
}
