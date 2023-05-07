import css from "styled-jsx/css";

export default css.resolve`
.container {
    width: 100%;
    display: grid;
    grid-template-areas: 
    "projectItem"
    "h1"
    "images"
    "description"
    ;
}

.projectItem {
    grid-area: projectItem;
    width: 100%;
}

.descriptionH1 {
    grid-area: h1;
    text-align: right;
    font-size: 32pt;
    line-height: 1.7em;
    margin: 40px 0;
    // background-color: #ffffff;
    // border-bottom: 4px solid var(--colorHeaderBg);
    padding: 20px;
    text-shadow: var(--colorH1) 2px 2px;

    // background: linear-gradient(0.15turn, var(--colorHeaderBg),var(--darkBg), var(--darkBg));
    // box-shadow: var(--colorText) 3px 4px 10px;

    background-color: var(--colorHeaderBg);
    color: var(--colorInputBg);
    text-shadow: var(--colorInputBg) 2px 2px;
}

.images {
    grid-area: images;
    border-radius: 25px;
    margin: 20px 0;
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



@media screen and (min-width: 768px) {
.container {
    display: grid;
    grid-template-areas: 
    "projectItem images"
    "h1 h1"
    "description description"
    ;
    gap: 20px;
    grid-template-columns: 1fr 2fr;
}

.description {
    border: 1px solid var(--colorBorders);
    border-radius: 25px;
    padding: 20px;
    margin: 20px 0;
    max-width: 700px;
}

.descriptionH1 {
    margin-bottom: 0;
    padding: 40px 20px;
    // padding-top: 0;
    // border-top: 1px solid var(--colorBorders);
    // box-shadow: var(--colorBorders) 1px 1px;

    // background-color: var(--colorBg);
    // background: linear-gradient(0.15turn, var(--colorHeaderBg),var(--darkBg), var(--darkBg));
    // width: 90vw;
    max-width: 900px;

}

@media screen and (min-width: 1280px) {
    .container {
        justify-content: center;
        justify-items: center;
        margin: 0 auto;
        grid-template-columns: 1fr 1fr;
    }
    
    .description {
        // width: 100vw;
        max-width: 1024px;
        margin: 0 auto;
    }

    .descriptionH1 {
    //    max-width: 1024px;
    }

    .projectItem {
        max-width: 500px;
        justify-self: flex-end;
    }


    .images {
        justify-self: flex-start;
        position: sticky;
        align-self: start;
    }

}

}
`