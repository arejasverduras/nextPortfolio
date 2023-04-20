import css from "styled-jsx/css";

export default css.resolve`
.container {
    width: 100%;
    margin-bottom: 50px;
}

.hr {
    margin: 50px 0;
    border-color: var(--colorBorders);
}

.footerImage {
    background-color: var(--colorBorders);
    border-radius: 50%;
    overflow: visible;
    transform: rotateY(180deg);
    width: 100%;
    max-width: 400px;
    height: auto;
}

.stylesHolder {
    // display: static;
}
`