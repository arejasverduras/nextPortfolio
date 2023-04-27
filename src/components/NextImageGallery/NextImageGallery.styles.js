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
        width: calc(25% - 6px);
        height: auto;
        aspect-ratio: 1/1;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        overflow:hidden;
        border-radius: 25px;
        cursor: zoom-in;
        filter: brightness(60%) contrast(125%); 
    }

    .otherImages:hover {
        filter: brightness(110%);
    }

    .imageItem {
        height: 100%;
        width: auto;
        transition: all 200ms;
    }

    .imageItem:hover {
        filter: brightness(100%);
    }

    .lastItemOverlay {
        background-color: var(--colorHeaderBg);
        width: auto;
        height: 100%;
        aspect-ratio: 1/1;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 30;
        color: var(--colorCommands);
        font-size: 2.5em;
    }

`