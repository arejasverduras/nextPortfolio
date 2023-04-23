import css from "styled-jsx/css";

export default css.resolve`
.container {
    margin-top: 20px;
    min-width: 100%;
    border: 1px solid var(--colorBorders);
    border-radius: 25px;
    cursor:pointer;
}

.content {
    display: flex;
    align-items: center;
    padding: 20px;
    height: 100%;
}

.logo {
    width: 150px;
    height: 150px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-shrink: 0;
}

.logoImage {
    width: 100%;
    height: auto;
}

.textContent {
    padding: 0 20px;
    max-width: 400px;
    flex-shrink: 1;
}

.description {
    text-decoration: none;
    color: var(--colorText);
}


.techHolder {
    gap: 8px;
    margin-top: 16px;
}

@media screen and (min-width: 768px) {
    .container {
        min-height: 200px;
        min-width: 0;
        max-width: 49%;
    }

    .content {
        max-width: 100%;
        padding: 10px;
    }
}
`