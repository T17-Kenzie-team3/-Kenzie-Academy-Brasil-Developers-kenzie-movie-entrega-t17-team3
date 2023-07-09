import styled from "styled-components";

export const StyledHomeMovieName= styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin-bottom: 3%;
.name{
font-size: 1.3125rem
}
@media (min-width:770px) {
 .name{
font-size:  2.75rem;
}
@media (min-width: 300px){
    flex-direction: row;
}
}
 `