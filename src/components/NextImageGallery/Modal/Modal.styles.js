import css from "styled-jsx/css";

export default css.resolve`
    .dialog {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--colorBg);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        
    }
`