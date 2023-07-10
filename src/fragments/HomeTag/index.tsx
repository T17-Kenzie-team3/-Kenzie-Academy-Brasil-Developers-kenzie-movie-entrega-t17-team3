import { useContext } from "react"
import { MovieContext } from "../../providers/MovieContext"
import{StyledBtnGenre} from "../../styles/tags/tagGenre"
import {StyledParagrOne } from "../../styles/typography/typography"
import { StyledHomeMovieTag } from "./style"
import { UserContext } from "../../providers/UserContext"

export const HomeMovieTag = () => {
  
  const { movieList, selectedMovie } = useContext(MovieContext)
  const { currentPath } = useContext(UserContext)

  return (
    <>
      {movieList && (
        <StyledHomeMovieTag>
          <StyledBtnGenre>{currentPath !== "/" ? selectedMovie!.type : movieList[0].type}</StyledBtnGenre>
          <StyledParagrOne >{currentPath !== "/" ? selectedMovie!.duration : movieList[0].duration}m</StyledParagrOne>
        </StyledHomeMovieTag>
      )}
    </>
  )
}
