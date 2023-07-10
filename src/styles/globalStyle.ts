import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`

  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  html{
    width: 100vw;
    height: 100vh;
  }

  body {
    display:flex;
    flex-direction: column;
    align-items: center;
    background: var(--grey2);
    background-attachment: fixed;
    color: var(--grey0);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    height: 100vh;
    height: fit-content;
    margin: 0 auto;
  }

  a, button {
    cursor: pointer;
    text-decoration: none;
  }

  :root { 
--orange: #FFBB38;
--black: #000000;
--grey2: #171717;
--grey1: #3D3D3D; 
--white: #FFFFFF;

--FInter: 'Inter', sans-serif;
--FPoppins: 'Poppins', sans-serif;

--H44: 2.75rem;
--H32: 2rem;
--H26: 1.625rem;
--H21: 1.3125rem;
--H17:  1.0625rem;
--P18: 1.125rem;
--P17:  1.0625rem;
--P16:  1rem;
--W7: 700;
--W4: 400;
}
`