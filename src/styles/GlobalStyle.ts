import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url('../asset/fonts/Inter-Regular.woff2') format('font-woff2'),
        url('../asset/fonts/Inter-Regular.woff') format('font-woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Noto Sans KR';
    src: url('../asset/fonts/NotoSansKR-Regular-Alphabetic.woff2') format('font-woff2'),
        url('../asset/fonts/NotoSansKR-Regular-Alphabetic.woff') format('font-woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    outline: none;
    
  }
  html, body{
    font-family: "Noto Sans KR" ,sans-serif;
    height: 100vh;
    width: 100vw;
  }
`;

export default GlobalStyle;
