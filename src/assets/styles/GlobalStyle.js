import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 60%;
   }

   * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
   }

   html, 
   body, 
   #root {
       height: 100vh;
   }

   #root {
       display: flex;
       align-items: center;
       justify-content: center;
   }

   body {
        background: #8675a9; 
   }

   body, 
   input, 
   button, 
   textarea {
        font: 500 1.6rem Poppins;
        color: #606060;
   }

   @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }   
   }
`; 

export default GlobalStyle;