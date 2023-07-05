import styled from "styled-components";

export const StyledHomeMovieCard= styled.li`
 display: flex;
 flex-direction: column;
 max-width: 27rem;
 width: 100%;

.HomeCardImg{
    height: 11.375rem;
    width: 100%;
    border-radius: 2.5rem;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
}

.divGenre{
 display: flex;
 flex-direction: row;
 align-items: flex-end;
 justify-content: space-between;
 max-width: 27rem;
 width: 100%;
 margin: 1.5rem 0 1rem 0;
}

.divName{
 display: flex;
 flex-direction: row;
 align-items: flex-start;
 justify-content: space-between;
 max-width: 27rem;
 width: 100%;
 margin: 0  0 2.5rem 0;
}

.name{
    width:100%;
    text-align: start;;
}

h3{
    width:100%;
    text-align: end;
}
.divRating{
 display: flex;
 flex-direction: row;
 align-items: flex-end;
 height:100%;
 width: 10%;
 justify-content: space-between;
 align-items: center;

}

.score{
    padding-left: 0.4rem;
}

@media (min-width:430px) {
    flex-direction: row;
    margin-right: 2rem;
    max-width: 27rem;
    min-width: 24rem;

    .HomeCardImg{
    padding: 0;
}
}
 `