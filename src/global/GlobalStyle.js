import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
    a{
        text-decoration:none;
        color:inherit;
    }
    html{
        font-size: 10px;
    }
    *{
        box-sizing:border-box;
        font-family: 'Do Hyeon', 'Noto Sans KR', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size:2rem;
    }
    body{
        margin: 0;
        // padding-top: 50px;
        font-family: 'Do Hyeon', 'Noto Sans KR', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        // word-break: keep-all;
        // word-wrap: break-word;
        font-size:2rem;
    }
    button{
        background-color: transparent;
        border: solid 2px black;
    }
    dl, li, menu, ol, ul {
        list-style: none;
    }
    
`;

export default GlobalStyles;
