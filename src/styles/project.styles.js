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
        // border: 1px solid var(--colorBorders);
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

    .description {
        grid-area: description;
        padding: 20px 0;
        width: 100%;
        font-size: 16pt;
        line-height: 1.4em;
        max-width: 700px;
    }

    .descriptionH1 {
        text-align: left;
        line-height: 1.2em;
        margin-bottom: 20px;
    }

    .readme {
        grid-area: readme;
        border: 1px solid var(--colorBorders);
        border-radius: 25px;
        padding: 20px;
        width: 100%;
        height: auto;
        max-width: 700px;
        transition: all 400ms;
    }

    .readMeVisible {
        height: 100%;
    }

    .readmeSubHolder {
        display: flex;
        gap: 1em;
        align-items: flex-end;
    }

    .readmeSubHolderIcon {
        width: 1.5rem;
        height: 1.5rem;

    }

    .readmeToggle {
        cursor: pointer;
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .readmeIcon {
        width: 20px;
        transition: all 400ms;
    }

    .readMeIconVisible {
        transform: rotate(90deg);
    }

@media screen and (min-width: 768px) {
    .container {
        display: grid;
        grid-template-areas: 
        "projectItem images"
        // "projectItem collaborators"
        "description description"
        "readme readme"
        ;
        gap: 20px;
        grid-template-columns: 1fr 2fr;
    }

    .readme {
        width: 50%;
        height: 
        transition: all 400ms;
    }

    .readMeVisible {
        width: 100%;
    }

    .description {
        border: 1px solid var(--colorBorders);
        border-radius: 25px;
        padding: 20px;
        
        margin: 20px 0;
        max-width: 700px;
    }
}
`