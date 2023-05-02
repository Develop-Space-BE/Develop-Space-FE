import { createGlobalStyle } from "styled-components";
import { bview } from "../asset/pic";

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
    width: 100%;
    height: 100vh;
    background-image: url(${bview});
    /* background-repeat: no-repeat;  */
    background-size: auto;
    // pc 화면
    @media screen and (min-width:1024px) {
      width: 390px;
      height: 100vh;
      margin: 0 auto;
    }
    // 태블릿 화면
    @media screen and (max-width:1023px) {
      width: 390px;
      height: 100vh;
      margin: 0 auto;
    }
    // 모바일 화면
    @media screen and (max-width:540px){
      width: 100vw;
      height: 100vh;
    }
  }
`;

export default GlobalStyle;
