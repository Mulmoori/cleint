import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --vh: 100%;
   }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    border: 0;
    padding: 0;
    vertical-align: baseline;
    font: inherit;
    font-size: 100%;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  *[hidden] {
      display: none;
  }
  body {
    touch-action: manipulation;
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  /* 폰트 설정 */
  font-size: px;
    
    @media (max-width: 768px) {
        font-size: 7px;
    }
    @media (max-width: 1200px) {
        font-size: 7px;
    }
    

  * {
    box-sizing: border-box;
  } 
  html {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
    
    scroll-behavior: smooth;

    font-family: "Pretendard";
    /* font-size: 62.5%; */
    
    user-select: none;
    /* @media (min-width:1800px){
      font-size: 62.5%;
    }
    @media (min-width:1420px) and (max-width:1799px){
      font-size: 46.8%;
    }
    @media (min-width:900px) and (max-width:1419px){
      font-size: 42%;
    }
    @media (min-width: 768px) and (max-width:899px){ 
      font-size: 35%;
    }
    @media (max-width:767px){ 
      font-size: 32%;
    } */
    

  }
  ul, li {
    padding-left: 0rem;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  input, button {
    outline: none; 
    border: none;
    background-color: transparent;
  }
  button {
    cursor: pointer;
    padding: 0;
  }
  input {
    appearance: none;
    
    &:focus {
      outline: none;
    }
  }


@font-face {
    font-family: 'Pretendard';
    src: url('/src/assets/fonts/Pretendard-Regular.woff') format('woff');
    font-style: normal;
  }


  @font-face {
    font-family: 'Pretendard-Bold';
    src: url('/src/assets/fonts/Pretendard-Bold.woff') format('woff');
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-Medium';
    src: url('/src/assets/fonts/Pretendard-Medium.woff') format('woff');
    font-style: normal;
  }

`;
