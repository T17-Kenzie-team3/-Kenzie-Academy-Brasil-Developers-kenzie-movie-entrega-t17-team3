import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyleLink = css`
 display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15.9375rem;
  font-family: var(--FPoppins);
  font-size: var(--P17);
  font-weight: var(--W7);
  color:var(--grey2) ;
  background: var(--orange);
  border: none;
`

export const StyledLinkLogin= styled.p`
 ${StyleLink};
  height: 2.6875rem;
  width: 8.9375rem ;
  padding: 0 0.5rem 0 0.5rem; 
`
export const StyledLinkRegister= styled.p`
  font-family: var(--FPoppins);
  font-size: var(--P17);
  font-weight: var(--W7);
  color:var(--white) ;
`
export const StyledLinkYellow = styled(Link)`
  font-family: var(--FPoppins);
  font-size: var(--P17);
  font-weight: var(--W7);
  color: var(--orange);
  display: flex;
  align-items: center;
`