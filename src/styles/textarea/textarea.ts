import styled, { css } from "styled-components";

export const Textarea = css`
display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    background: var(--grey1);
    width: 100%;
    font-family: var(--FPoppins);
    font-size: var(--H16);
    font-weight: var(--w7);
    color: var(--white);
    padding-left: 15px;

`
export const StyledTextareaModal = styled.textarea`
 ${Textarea};
  height: 12.5rem;
  columns: 30;
  margin: 1.5rem 0 1.5rem 0;
  padding-top: 1rem;
  border-radius: 0px;
  
 select:focus{
    background: 0 ;
    border: 0 ;
 }
`