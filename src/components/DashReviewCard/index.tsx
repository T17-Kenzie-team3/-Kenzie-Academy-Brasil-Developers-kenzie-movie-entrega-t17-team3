import { useContext } from "react"
import { MovieContext } from "../../providers/MovieContext"
import { UserContext } from "../../providers/UserContext"
import { AiOutlineStar } from "react-icons/ai"
import {StyledDashReviewCard } from "./style"
import { StyledEllipseBig} from "../../styles/tags/ellipse"
import { StyledTitleTwo, StyledTitleThree,  StyledParagrOne} from "../../styles/typography/typography"

export const DashReviewCard = () => {
  const { selectedMovie } = useContext(MovieContext)
  const { user, userNameList } = useContext(UserContext)

  const getUserName = (userId: number) => {
    const userFind = userNameList.find((user) => user.id === userId)
    return userFind?.name
  }

  const getUserProfileImage = (userId: number) => {
    const userFind = userNameList.find((user) => user.id === userId)
    return userFind?.firstLetter
  }

  const filteredReviews = selectedMovie?.reviews.filter(
    (review) => review.userId !== user?.user.id
  )

  return (
    <>

      {filteredReviews?.map((review) => (
        <StyledDashReviewCard key={review.userId}>
            <StyledEllipseBig>
          <StyledTitleTwo>{getUserProfileImage(review.userId)}</StyledTitleTwo>
          </StyledEllipseBig>    
          <div className="divRating">
            <AiOutlineStar fill="#FFBB38" size="35px"/>
            <StyledTitleThree>{review.score}</StyledTitleThree>
          </div>
          <div className="divDescription">
          <StyledParagrOne>{review.description}</StyledParagrOne>
          </div>
          <StyledTitleThree>{getUserName(review.userId)}</StyledTitleThree>
        </StyledDashReviewCard>
      ))}
    </>
  )
}
