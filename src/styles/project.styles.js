import css from "styled-jsx/css";

export default css.resolve`
    .container {
        width: 100%;
    }

    .projectItem {
        grid-area: projectItem;
        width: 100%;
    }



    .logoImage {
        width: 100%;
        height: auto;
    }
    
    .images {
        grid-area: images;
        border: 1px solid var(--colorBorders);
        border-radius: 25px;
        margin: 20px 0;
        display: flex;
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .collaborators {
        grid-area: collaborators;
        border: 1px solid var(--colorBorders);
        border-radius: 25px;
        padding: 20px;
        width: 100%;
    }

    .readme {
        grid-area: readme;
        border: 1px solid var(--colorBorders);
        border-radius: 25px;
        padding: 20px;
        width: 100%;
        margin: 20px 0;
    }

@media screen and (min-width: 768px) {
    .container {
        display: grid;
        grid-template-areas: 
        "projectItem images"
        "projectItem collaborators"
        "readme readme"
        ;
        gap: 20px;
        grid-template-columns: 1fr 2fr;
    }
}
`