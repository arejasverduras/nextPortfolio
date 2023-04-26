import css from "styled-jsx/css";

export default css.resolve`
    .container {
        width: 100%;
        height: auto;
        margin: 0 auto;
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

    .imageItem {
        width: 100%;
        height: auto;
    }

    .otherImages {
        width: 150px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow:hidden;
        border-radius: 25px;
        cursor: zoom-in;
        filter: brightness(50%) contrast(125%); 
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

`