import css from "styled-jsx/css";

export default css.resolve`
    .container {
        display: flex;
        flex-wrap: wrap;
        width: 60%;
        max-width: 700px;
        justify-content: space-between;
        margin-top: 40px;
    }

    .iconContainer {
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin-bottom: 10px;
    }

@media screen and (min-width: 768px){
    .container {
        justify-content: space-between;
        max-width: 350px;
        padding-left: 20px;
    }
}
`
