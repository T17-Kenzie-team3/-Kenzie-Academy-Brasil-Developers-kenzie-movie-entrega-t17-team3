import styled, { css } from "styled-components";

export const Ellipse = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15.9375rem;
  font-family: var(--FPoppins);
  font-weight: var(--w7);
  color:var(--white) ;
  background: var(--orange);
`
export const StyledEllipseBig= styled.div`
 ${Ellipse};
  height: 5.0625rem;
  width: 5.0625rem;
  font-size: var(--P32);
`
export const StyledEllipseSmall= styled.div`
  ${Ellipse};
  height: 2.6875rem;
  width: 3.275rem;
  font-size: var(--P17);
`