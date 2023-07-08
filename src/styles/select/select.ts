import styled, { css } from "styled-components";

export const Select = css`
display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: var(--grey1);
    width: 100%;
    font-family: var(--FPoppins);
    font-size: var(--H16);
    font-weight: var(--w7);
    color: var(--white);
    padding-left: 15px;

`
export const StyledSelectModal = styled.select`
 ${Select};
  height: 4.375rem;
  margin: 1.5rem  0 0 0;
  border-radius: 0px;
  
 select:focus{
    background: 0 ;
    border: 0 ;
 }
`