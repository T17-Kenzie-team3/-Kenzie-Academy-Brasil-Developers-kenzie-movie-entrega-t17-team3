import { useContext } from "react"
import { MovieContext } from "../../providers/MovieContext"
import { StarRating } from "../StarRating"
import { StyledHomeMovieName } from "./style"
import { StyledTitleOne} from "../../styles/typography/typography"

export const HomeMovieName = () => {

  const { movieList } = useContext(MovieContext)
  
  return (
    <>
      {movieList && (
        <StyledHomeMovieName className="divName">
          <StyledTitleOne  className="name">{movieList[0].name}</StyledTitleOne>
          <StarRating />
        </StyledHomeMovieName>
      )}
    </>
  )
}
