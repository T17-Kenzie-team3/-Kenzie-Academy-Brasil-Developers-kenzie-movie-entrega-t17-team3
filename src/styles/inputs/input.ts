import styled, { css } from "styled-components";

interface InputDefaultStyles{
    error: { }
};

const InputDefaultStyles = css<InputDefaultStyles>`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 padding-left: 0.5rem;
 height: 4.375rem;
 width: 100%;
 gap: 1rem;
 margin: 1.3rem 0rem;
 font-family: var(--FPoppins);
 font-size: var(--P16);
 font-weight: var(--w7);
 color: var(--white);
 background-color:  var(--grey1);
 ${({ error }) => {
        if (error) {
            return css`
                border: 1px solid var(--orange);
            `
        }
    }}
`
export const StyledInput= styled.input<InputDefaultStyles>`
 ${InputDefaultStyles};
 border: 1px solid var(--grey1);

 :focus{
    border: 1px solid var(--grey2);
 }
`