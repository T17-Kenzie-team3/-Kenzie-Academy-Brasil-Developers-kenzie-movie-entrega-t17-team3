import styled from "styled-components";

export const StyledHeader = styled.header`
 display: flex;
 flex-direction: row;
 align-items: center;
 position: fixed;
 height: 5.625rem;
 width:100%;
padding: 0 1rem 0 1rem;

img{
height: 0.875rem;
width: 6.75rem;
}

nav{
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: flex-end;
 width:100%;
}

.ellipse{
 margin-right: 1rem;
}

.name{
 display: none; 
}

.logout{
 margin-left: 10%;
}

.linkLogin{
 margin-left: 2.5rem;
}

.linkRegister{
 display: none;
}

@media (min-width:430px) {
    padding: 0 12% 0 12%;

 img{
     height: 1.0625rem ; 
     width: 8.5rem ;
}
  
.linkRegister{
     display: contents;
}

.name{
 display: contents;
}
}
 `

export const StyledNavHeader = styled.div`
     display: flex;
     align-items: center;
     gap: 50px;
`