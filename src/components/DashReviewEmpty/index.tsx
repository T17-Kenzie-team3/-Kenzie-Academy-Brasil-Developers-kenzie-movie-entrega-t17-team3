import {StyledDashReviewEmpty} from "./style"
import { StyledTitleOne} from "../../styles/typography/typography"
import { AiOutlineStar } from "react-icons/ai"
import { StyledBtnRatingUpdate } from "../../styles/buttons/button"

export const DashReviewEmpty = () => {

    return (
        <StyledDashReviewEmpty>
            <StyledTitleOne>Avaliações</StyledTitleOne>
            <StyledBtnRatingUpdate>
                <AiOutlineStar fill="#000" size="35px" />
                <span>Avaliar</span>
            </StyledBtnRatingUpdate>
        </StyledDashReviewEmpty>
    )
}