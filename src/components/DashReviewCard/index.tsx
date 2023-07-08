import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { AiOutlineStar } from "react-icons/ai"
import { StyledDashReviewCard } from "./style"
import { StyledEllipseBig } from "../../styles/tags/ellipse"
import {
  StyledTitleTwo,
  StyledTitleThree,
  StyledParagrOne,
} from "../../styles/typography/typography"
import { IReview } from "../../providers/MovieContext/@types"

interface DashReviewCard {
  cardReview: IReview
}

export const DashReviewCard = ({ cardReview }: DashReviewCard) => {
  const { userList } = useContext(UserContext)

  const cardUser = userList.find((user) => user.id === cardReview.userId)

  return (
    <>
      <StyledDashReviewCard>
        <StyledEllipseBig>
          <StyledTitleTwo>{cardUser?.name.charAt(0)}</StyledTitleTwo>
        </StyledEllipseBig>
        <div className="divRating">
          <AiOutlineStar fill="#FFBB38" size="35px" />
          <StyledTitleThree>{cardReview.score}</StyledTitleThree>
        </div>
        <div className="divDescription">
          <StyledParagrOne>{cardReview.description}</StyledParagrOne>
        </div>
        <StyledTitleThree>{cardUser?.name}</StyledTitleThree>
      </StyledDashReviewCard>
    </>
  )
}
