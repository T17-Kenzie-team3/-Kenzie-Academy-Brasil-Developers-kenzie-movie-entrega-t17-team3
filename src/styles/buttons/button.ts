import styled, { css } from "styled-components";

export const Button = css`
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
  :hover {
  background: hsl(39, 100%, 50%);  //63% original
  color:var(--black) ;
 }
`
export const StyledBtnRatingUpdate = styled.button`
 ${Button};
  height: 3.375rem;
  width: 10.625rem;
`
export const StyledBtnLogin = styled.button`
 ${Button};
  height: 4.1875rem;
  width: 100%;
`
export const StyledBtnRegister = styled.button`
 ${Button};
  height: 4.1875rem;
  width: 100%; //12.125rem
`