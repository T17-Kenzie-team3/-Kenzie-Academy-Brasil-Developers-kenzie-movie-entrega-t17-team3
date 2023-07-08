import { useContext } from "react"
import { MovieContext } from "../../providers/MovieContext"
import{StyledBtnGenre} from "../../styles/tags/tagGenre"
import {StyledParagrOne } from "../../styles/typography/typography"
import { StyledHomeMovieTag } from "./style"

export const HomeMovieTag = () => {
  
  const { movieList, selectedMovie } = useContext(MovieContext)

  return (
    <>
      {movieList && (
        <StyledHomeMovieTag>
          <StyledBtnGenre>{selectedMovie? selectedMovie.type : movieList[0].type}</StyledBtnGenre>
          <StyledParagrOne >{selectedMovie? selectedMovie.duration : movieList[0].duration}m</StyledParagrOne>
        </StyledHomeMovieTag>
      )}
    </>
  )
}
