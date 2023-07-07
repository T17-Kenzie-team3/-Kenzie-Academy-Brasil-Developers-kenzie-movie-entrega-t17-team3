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
//fontfamily
--FInter: 'Inter', sans-serif;
--FPoppins: 'Poppins', sans-serif;
//fontsize
--H44: 2.75rem;    //poppins w7 H1
--H32: 2rem;   //poppins w7 H1mobile
--H26: 1.625rem;   //poppins w7 H2
--H21: 1.3125rem;    //poppins w7 H3
--H17:  1.0625rem; //poppins w7 H4
                              //poppins w4 H5
--P18: 1.125rem;   //inter w4 H4   P1
--P17:  1.0625rem;    //poppins w7    P2
--P16:  1rem;    //poppins w7   P3
//font weigth 
--W7: 700;
--W4: 400;
  }
`