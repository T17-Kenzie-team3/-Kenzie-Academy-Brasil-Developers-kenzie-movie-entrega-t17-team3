import styled from "styled-components";

export const StyledModalEdit  = styled.div`
 display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: flex-start;
  height: 100%;
  width:100%;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, .5);

  .modalBox{
    height: 38,12rem;
    width: 100%;
    max-width: 48rem;
    background-color:var(--grey2);
    
    padding: 1.4rem 1rem 1rem 1rem; 
    position: relative;
}
 
.modalBtnClose{
    background-color: transparent;
    border: none;
    color:  #FFFFFF80;
    font-family: var(--FInter);
    font-weight: 400;
    font-size: 1.8rem;
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
}

form{
    display: flex;
    flex-direction: column;
    height: 100%;
    width:100%;
}

@media (min-width:770px) {
    .modalBox{
    padding: 2.4rem 3.2rem 4.4rem 3.2rem;
}

}
 `