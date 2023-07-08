import { useContext } from "react"
import { MovieContext } from "../../providers/MovieContext"
import { UserContext } from "../../providers/UserContext"
import { AiOutlineStar } from "react-icons/ai"
import { StyledDashReviewCard } from "./style"
import { StyledEllipseBig } from "../../styles/tags/ellipse"
import { StyledTitleTwo, StyledTitleThree, StyledParagrOne } from "../../styles/typography/typography"

export const DashReviewCard = () => {
  const { selectedMovie } = useContext(MovieContext)
  const { user } = useContext(UserContext)

  const filteredReviews = selectedMovie?.reviews.filter(
    (review) => review.userId !== user?.id
  )

  return (
    <>

      {filteredReviews?.map((review) => (
        <StyledDashReviewCard key={review.id}>
          <StyledEllipseBig>
            <StyledTitleTwo>{user?.name.charAt(0)}</StyledTitleTwo>
          </StyledEllipseBig>
          <div className="divRating">
            <AiOutlineStar fill="#FFBB38" size="35px" />
            <StyledTitleThree>{review.score}</StyledTitleThree>
          </div>
          <div className="divDescription">
            <StyledParagrOne>{review.description}</StyledParagrOne>
          </div>
          <StyledTitleThree>{user?.name}</StyledTitleThree>
        </StyledDashReviewCard>
      ))}
    </>
  )
}
