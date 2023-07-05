import styled from "styled-components";

export const StyledHomeBanner= styled.section`
 display: flex;
 display: flex;
 flex-direction: column;
 width: 100%;
 align-content: space-around;
 justify-content: flex-start;
 align-items: stretch;


.HomeBannerImg{
    height: 11.375rem;
    max-width: 27rem;
    width: 100%;
    border-radius: 2.5rem;
}

@media (min-width:430px) {
    padding: 0;

    .HomeBannerImg{
    height: 70%;
    max-width: 100vw;
}
}
 `