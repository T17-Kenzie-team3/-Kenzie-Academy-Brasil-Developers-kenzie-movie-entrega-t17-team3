import { ThreeDots } from  'react-loader-spinner'
import { StyledMainLoadingPage } from './style'

export const LoadingPage = () => {
    return (
        <StyledMainLoadingPage>
            <ThreeDots 
                height="120" 
                width="120" 
                radius="9"
                color="var(--orange)" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </StyledMainLoadingPage>
    )
}