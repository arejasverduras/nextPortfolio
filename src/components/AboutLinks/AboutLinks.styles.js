import css from "styled-jsx/css";

export default css.resolve`
    .container {
        display: flex;
        flex-wrap: wrap;
        width: 60%;
        max-width: 700px;
        padding: 0 20px;
        justify-content: space-between;
        
    }

    .itemContainer {

    }

    .iconContainer {
        width: 50px;
        height: 50px;
    }

@media screen and (min-width: 768px){
    .container {
        justify-content: space-between;
        max-width: 350px;
        padding-left: 20px;
    }
}
`
