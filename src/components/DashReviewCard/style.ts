import styled from "styled-components";

export const StyledDashReviewCard= styled.li`
     display: flex;
     flex-direction: column;
     align-items: center;
     height: 25rem;
     max-width: 20rem;
     width: 100%;
     padding: 1rem  0.5rem;
     margin: 0.5rem 0 1rem 0;
     text-align: center;

     > :first-child {
         display: flex;
     }
     
     .divEvaluation{
        display: flex;
        flex-direction: column;
     }

     .divRating{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width:100%;
        gap: 0.3rem;
        margin: 1rem 0 2rem 0;
      }

     .divDescription{
        display: flex;
         flex-direction: column;
         align-items: center;
         height: fit-content;;
         width: 100%;
      }

@media (min-width:770px) {
   .divDescription{
     height: 10rem ;
     margin-bottom: 2rem;
   }
}
`