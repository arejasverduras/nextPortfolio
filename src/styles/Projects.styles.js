import css from "styled-jsx/css"

export default css.resolve`
.filterInput {
    margin: 0 auto;
    background-color: var(--colorHeaderBg);
    border: none;
    border-radius: 25px;
    padding: 16px;
    color: var(--colorH2);
}

.filterInput:focus {
    outline:none;
}

.filterInput::placeholder {
    color: var(--colorBg);
}

.listItems {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-around;
    }
`