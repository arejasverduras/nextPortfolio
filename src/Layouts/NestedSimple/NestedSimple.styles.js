import css from "styled-jsx/css";

export default css.resolve`
.container {
    display: flex;
    margin-top: 92px;
    width: 100%;
    background-color: var(--colorBg);
    height: 100%;
    min-height: calc(100vh - 112px);
    padding: 20px;
    padding-bottom: 0;
}

.sectionContent {
    background-color: var(--colorBg);
    color: var(--colorText);
    width: 100%;
    min-height: calc(100vh - 112px);
    border: 2px solid var(--colorText);
    border-bottom: none;
    padding: 20px;
}

@media screen and (max-width: 492px) {
    .container {
        margin-top: 150px;
    }
}
`