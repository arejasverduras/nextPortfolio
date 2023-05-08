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
        padding: 20px;
        padding-bottom: 0;
        width: 100%;
        height: auto;
        max-width: 700px;
        border: 1px solid var(--colorBorders);
        border-radius: 25px;
        transition: all 400ms;
    }

    .readMeVisible {
        height: 100%;
        padding: 20px 0;
        border: none;
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
        padding-bottom: 20px;
        // border-bottom: 1px solid var(--colorBorders);
    }

    .readMeToggleVisible {
        // border-color: var(--colorH2);
        padding-bottom: 20px;
        border-bottom: 1px solid var(--colorBorders);
    }

    .readmeIcon {
        width: 20px;
        color: var(--colorH2);
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

    .readmeToggle {
        border-bottom: none;
        padding-bottom: 0;
    }

    .readme {
        width: 50%;
        transition: all 400ms;
        border: 1px solid var(--colorBorders);
        border-radius: 25px;
    }

    .readMeVisible {
        width: 100%;
        padding: 20px;
    }

    .description {
        border: 1px solid var(--colorBorders);
        border-radius: 25px;
        padding: 20px;
        
        margin: 20px 0;
        max-width: 700px;
    }
}

@media screen and (min-width: 1440px) {
    .container {
        grid-template-areas: 
        "projectItem images"
        ". description"
        ". readme"
        ;
        grid-template-columns: 1fr 2fr;
        max-width: 1440px;
    }
    
    .description {
        // width: 100vw;
        max-width: 1024px;
        margin: 0 auto;
    }

    .readme {
        max-width: 1024px;
        // margin: 0 auto;
        padding: 20px;
        
    }

    

    // .projectItem {
    //     max-width: 500px;
    //     justify-self: flex-end;
    // }


    .images {
        justify-self: flex-start;
        position: sticky;
        align-self: start;
    }

}

`