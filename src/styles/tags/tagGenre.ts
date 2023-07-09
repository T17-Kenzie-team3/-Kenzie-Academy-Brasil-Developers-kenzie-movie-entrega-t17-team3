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
  height: clamp(1.6875rem, 20vw, 2.6875rem);
  width: fit-content;
  padding: 0.5rem clamp(0.2rem, 5vw, 2rem); 
`