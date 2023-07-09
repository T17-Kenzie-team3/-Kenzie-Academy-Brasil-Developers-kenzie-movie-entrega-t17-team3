import { useContext } from "react"
import { MovieContext } from "../../providers/MovieContext"
import { DashReviewCard } from "../DashReviewCard"
import { StyledDashReviewList} from "./style"
import { UserContext } from "../../providers/UserContext"

export const DashReviewList = () => {
  const { user } = useContext(UserContext)
  const { reviews } = useContext(MovieContext)
  const filteredReviews = reviews.filter(
    
    (review) => review.userId !== user?.id
    )
    const review = reviews[1]

  return (
    <StyledDashReviewList>
      {filteredReviews?.map((review) => (
        <DashReviewCard key={review.id} cardReview={review} />
      ))}
      <DashReviewCard key={review.id} cardReview={review} />
      <DashReviewCard key={review.id} cardReview={review} />
      <DashReviewCard key={review.id} cardReview={review} />
      <DashReviewCard key={review.id} cardReview={review} />
    </StyledDashReviewList>
  )
}
