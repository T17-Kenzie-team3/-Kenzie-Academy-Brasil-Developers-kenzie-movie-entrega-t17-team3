import styled, { css } from "styled-components";

// interface InputDefaultStyles{
//     error: { }
// };

const InputDefaultStyles = css`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 padding-left: 0.5rem;
 height: 3.375rem;
 width: 100%;
 gap: 1rem;
 font-family: var(--FPoppins);
 font-size: var(--P16);
 font-weight: var(--w7);
 color: var(--white);
 background-color:  var(--grey1);
`

// Estas linhas foram retirada do InputDefaultStyles para aguardar a finalização da parte logica.
//  ${({ error }) => {
//         if (error) {
//             return css`
//                 border: 1px solid var(--orange);
//             `
//         }
//     }}


export const StyledInput= styled.input`
 ${InputDefaultStyles};
 border: 1px solid var(--grey1);

 :focus{
    border: 1px solid var(--grey2);
 }
`