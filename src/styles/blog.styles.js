import css from "styled-jsx/css";

export default css.resolve`
.container {
    width: 100%;
}

.projectItem {
    grid-area: projectItem;
    width: 100%;
}

.images {
    grid-area: images;
    border-radius: 25px;
    margin: 20px 0;
    display: flex;
    width: 100%;
    height: auto;
    overflow: hidden;
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
    text-align: right;
    line-height: 1.7em;
    margin-bottom: 40px;
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

@media screen and (min-width: 768px) {
.container {
    display: grid;
    grid-template-areas: 
    "projectItem images"
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
    // margin: 0 auto 40px auto;
    // padding-top: 0;
    // border-top: 1px solid var(--colorBorders);
    // box-shadow: var(--colorBorders) 1px 1px;

    // background-color: var(--colorBg);
    // background: linear-gradient(0.15turn, var(--colorHeaderBg),var(--darkBg), var(--darkBg));
    width: 90vw;
    max-width: 900px;
}
}
`