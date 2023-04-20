import css from "styled-jsx/css";

export default css.resolve`
.filterHolder {
    display: flex;
    justify-items: flex-start;
    align-items: center;
    margin: 10px auto 0 auto;
    background-color: var(--colorHeaderBg);
    border: none;
    border-radius: 25px;
    padding: 16px;
    color: var(--colorH2);
    width: 200px;
    gap: 9px;
}

.filterInput {
    background-color: transparent;
    border: none;
    color: var(--colorH2);
}

.filterInput:focus {
    outline:none;
}

.filterInput::placeholder {
    color: var(--colorBg);
}
`