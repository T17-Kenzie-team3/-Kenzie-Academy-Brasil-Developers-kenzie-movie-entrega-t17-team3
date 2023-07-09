import styled from "styled-components";

export const StyledDashBanner= styled.section`

>:first-child{
    width: 100%;
    height: clamp(17.6rem, 37vw, 33.5rem);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 2rem;
    z-index: -1;
    position: relative;
}

.DashBannerImg{
    z-index: -2;
    transform: scale(1.1);
    height: 100%;
    width: 105%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    min-height: 27rem;
    object-fit: contain;
}

>div>svg{
    z-index: -1;
    transform: scale(1.1);
    height: 100%;
    width: 105%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background: radial-gradient(transparent, #000000);
    min-height: 27rem;
}

.DashBannerImg:hover{
    cursor: pointer;
    transition: 0.4s;
    transform: scale(1,1);
}

.divDescription{
    position: absolute;
    bottom:  -0.8rem;
    left: 0;  
    width:100%;
    padding: 0 1rem 0 1rem;
}

.divSynopsis{
height: fit-content;
width: clamp(14.75rem, 100%, 80rem);
text-align: left;
padding: 0 1rem 0 1rem;
@media (min-width: 800px){
    text-align: justify;
}

}

@media (min-width:770px) {
    .divDescription{
    position: absolute;
    bottom:  -1.6rem;
    left: 0;  
    padding: 0 12% 0 12%;
}
.divSynopsis{
    padding: 0 12% 0 12%;
}
}
 `