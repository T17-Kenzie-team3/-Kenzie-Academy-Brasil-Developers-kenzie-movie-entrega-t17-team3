import styled, { css } from "styled-components";

export const Button = css`
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
  transition: .5s;
  border: none;
`
export const StyledBtnRatingUpdate = styled.button`
 ${Button};
  height: 3.375rem;
  width: 10.625rem;
`
export const StyledBtnLogin = styled.button`
 ${Button};
  height: 3.375rem;
  width: 100%;
`
export const StyledBtnRegister = styled.button`
 ${Button};
  height: 3.1875rem;
  width: 10.125rem;
`
export const StyledBtnLogout= styled.button`
  font-family: var(--FPoppins);
  font-size: var(--P17);
  font-weight: var(--w7);
  background-color: transparent;
  border: none;
  color:var(--white) ;
`