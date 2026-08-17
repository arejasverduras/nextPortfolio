import css from "styled-jsx/css";

export default css.resolve`
    .container {
        width: 100%;
        max-width: 900px;
    }

    .firstImageContainer {
        position: relative;
        width: 100%;
        aspect-ratio: 3 / 2;
        cursor: zoom-in;
        overflow: hidden;
        border-radius: clamp(12px, 3vw, 25px);
        background: color-mix(in srgb, var(--colorBg), var(--colorText) 6%);
    }

    .firstImage:hover {
        filter: brightness(110%);
    }

    .firstImage {
        object-fit: contain;
        transition: filter 200ms ease;
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
        position: relative;
        padding: 0;
        border: 0;
        width: calc(25% - 6px);
        aspect-ratio: 1 / 1;
        overflow: hidden;
        border-radius: clamp(10px, 2.5vw, 25px);
        cursor: zoom-in;
        background: color-mix(in srgb, var(--colorBg), var(--colorText) 6%);
    }

    .otherImages:hover .imageItem,
    .otherImages:focus-visible .imageItem {
        filter: brightness(110%);
    }

    .imageItem {
        object-fit: cover;
        filter: brightness(60%) contrast(125%);
        transition: filter 200ms ease;
    }

    .lastItemOverlay {
        position: absolute;
        inset: 0;
        background-color: color-mix(in srgb, var(--colorHeaderBg), transparent 12%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        color: var(--colorCommands);
        font-size: clamp(1.25rem, 5vw, 2.5rem);
    }

    @media (prefers-reduced-motion: reduce) {
        .firstImage,
        .imageItem {
            transition: none;
        }
    }

`
