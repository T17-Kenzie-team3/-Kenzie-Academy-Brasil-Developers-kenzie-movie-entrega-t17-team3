import styled, { css } from "styled-components";

export const Link = css`
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
  border: none;
`

export const StyledLinkLogin= styled.a`
 ${Link};
  height: 2.6875rem;
  width: 8.9375rem ;
  padding: 0 0.5rem 0 0.5rem; 
`
export const StyledLinkRegister= styled.a`
  font-family: var(--FPoppins);
  font-size: var(--P17);
  font-weight: var(--w7);
  color:var(--white) ;
`