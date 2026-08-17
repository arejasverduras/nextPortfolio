import css from "styled-jsx/css";

export default css.resolve`
    .dialog {
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100dvh;
        background-color: color-mix(in srgb, var(--colorBg), black 12%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        overscroll-behavior: contain;
    }
`
