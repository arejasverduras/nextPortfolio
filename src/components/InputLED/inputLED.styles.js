import css from "styled-jsx/css";

export default css.resolve`
    .container {
        width: 50px;
        height: 50px;
        display: grid;
        grid-template-areas: "one";
        justify-content: center;
        justify-items: center;
        align-items: center;
        // border: 1px solid white;
        transform: scale(0.4);
    }

    .firstCircle {
        grid-area: one;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background-color: var(--colorBg);
        box-shadow: var(--colorBg) 0px 4px;
    }

    .secondCircle {
        grid-area: one;
        width: 44px;
        height: 44px;
        border-radius: 50%;
    }

    .thirdCircle {
        grid-area: one;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        
        // border: 0px solid transparent;
        // border-top: 1px solid var(--colorText);
        transform: rotate(45deg);
        background: linear-gradient( white, white,transparent, white);
        background: linear-gradient( white, white,transparent);
        background: radial-gradient( white, transparent);
        // background: radial-gradient( white, transparent, white, transparent);
        opacity: 0.5;
    }
`