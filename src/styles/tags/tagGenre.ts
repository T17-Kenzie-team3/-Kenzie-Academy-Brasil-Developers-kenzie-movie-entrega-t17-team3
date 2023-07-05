import styled, { css } from "styled-components";

export const tagGenre = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15.9375rem;
  font-family: var(--FPoppins);
  font-size: var(--P17);
  font-weight: var(--w7);
  color:var(--grey2) ;
  background: var(--orange);
  transition: .5s;
`
export const StyledBtnGenre= styled.a`
 ${tagGenre};
  height: 2.6875rem;
  width: fit-content;
  padding: 0.5rem 2rem 0.5rem  2rem; 
`