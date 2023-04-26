import css from "styled-jsx/css";

export default css.resolve`
    .container {
        width: 100%;
        height: auto;
        // margin: 0 auto;
        max-width: 900px;
    }

    .firstImageContainer {
        cursor: zoom-in;
        overflow:hidden;
    }

    .firstImage:hover {
        filter: brightness(110%);
    }

    .firstImage {
        width: 100%;
        height: auto;
        // border: 1px solid var(--colorBorders);
        border-radius: 25px;
    }

    .imageList {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: flex-start;
        gap: 8px;
        margin-top: 8px;
    }



    .otherImages {
        width: calc(25% - 8px);
        height: auto;
        aspect-ratio: 1/1;
        display: grid;
        grid-template-areas: "picture";
        justify-content: center;
        align-items: center;
        overflow:hidden;
        border-radius: 25px;
        cursor: zoom-in;
        filter: brightness(60%) contrast(125%); 
    }

    .otherImages:hover {
        filter: brightness(110%);
    }

    .otherImages .imageItem {
        height: 100%;
        width: auto;
        transition: all 200ms;
    }

    .otherImages .imageItem:hover {
        filter: brightness(100%);
    }

    .imageItem {
        grid-area: picture;
        width: 100%;
        height: auto;
    }

    .lastItemOverlay {
        grid-area: picture;
        background-color: var(--colorHeaderBg);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center; 
        z-index: 10;
        color: var(--colorCommands);
        opacity: 1;
        font-size: 2.5em;
    }

`