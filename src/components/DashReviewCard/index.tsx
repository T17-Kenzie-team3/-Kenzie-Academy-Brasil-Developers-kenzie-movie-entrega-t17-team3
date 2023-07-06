import { useContext } from "react"
import { MovieContext } from "../../providers/MovieContext"
import { UserContext } from "../../providers/UserContext"
import { AiOutlineStar } from "react-icons/ai"

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
        <li key={review.userId}>
          <span>{getUserProfileImage(review.userId)}</span>
          <div>
            <AiOutlineStar />
            <p>{review.score}</p>
          </div>
          <p>{review.description}</p>
          <h3>{getUserName(review.userId)}</h3>
        </li>
      ))}
    </>
  )
}
