import styled from "styled-components";

export const StyledHomeBanner= styled.section`

>:first-child{
    width: 100%;
    border-radius: clamp(1rem, 2vw, 2.9rem);
    height: clamp(11.6rem, 37vw, 33.5rem);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 2rem;
}

.HomeBannerImg{
    transform: scale(1.1);
    height: 100%;
}

.HomeBannerImg:hover{
    cursor: pointer;
    transition: 0.4s;
    transform: scale(1,1);
}

@media (min-width:430px) {
}
 `