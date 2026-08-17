import css from "styled-jsx/css";

export default css.resolve`
    .container {
        display: grid;
        grid-template-rows: minmax(0, 1fr) auto;
        position: relative;
        z-index: 50;
        width: 100%;
        height: 100dvh;
        min-height: 0;
        padding-top: max(4rem, env(safe-area-inset-top));
    }

    .mainImageContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 0;
        min-width: 0;
        width: 100%;
        max-width: 100vw;
        overflow-hidden;
        padding: 0 clamp(0.75rem, 6vw, 5rem) 1rem;
    }

    .mainImageHolder {
        position: relative;
        min-width: 0;
        width: 100%;
        max-width: 100%;
        height: 100%;
    }

    .mainImage {
        position: absolute;
        inset: 0;
        width: 100%;
        max-width: 100%;
        overflow: hidden;
    }

    .mainImageImage {
        width: 100% !important;
        max-width: 100% !important;
        height: 100% !important;
        object-fit: contain;
    }


    .bottom {
        position: relative;
        width: 100%;
        min-height: calc(6rem + env(safe-area-inset-bottom));
    }

    .buttons {
        position: static;
    }

    .buttonLeft {
        position: fixed;
        left: max(0.75rem, env(safe-area-inset-left));
        top: 50%;
        transform: translateY(-50%);
        color: var(--colorText);
        background-color: var(--colorBg);
        border:none;
        padding-right: 2px;
        border-radius: 100%;
        width: 50px;
        height: 50px;
        cursor:pointer;
        z-index: 2;
    }

    .buttonRight {
        position: fixed;
        right: max(0.75rem, env(safe-area-inset-right));
        top: 50%;
        transform: translateY(-50%);
        color: var(--colorText);
        background-color: var(--colorBg);
        border:none;
   
        padding-left: 2px;
        border-radius: 100%;
        width: 50px;
        height: 50px;
        cursor:pointer;
        z-index: 2;
    }

    .close {
        position: fixed;
        top: max(1rem, env(safe-area-inset-top));
        left: max(1rem, env(safe-area-inset-left));
        display: flex;
        align-items: center;
        
    }

    .closeButton {
        background-color: var(--colorBg);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: var(--colorText);
        cursor: pointer;
        border: none;
    }

    .openFullSize {
        display: contents;
    }

    .buttonFullSize {
        position: fixed;
        top: max(1rem, env(safe-area-inset-top));
        right: max(1rem, env(safe-area-inset-right));
        color: var(--colorText);
        background-color: var(--colorBg);
        width: 40px;
        height: 40px;
        padding: 8px;
        border-radius: 50%;
    }

    .icon {
        width: 24px;
    }

    .bottomNavHolder {
        position: relative;
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        z-index: 1;
        padding: 0.75rem max(1rem, env(safe-area-inset-right)) max(0.75rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left));
        scrollbar-width: thin;
    }

    .bottomNav {
        display: flex;
        gap: 8px;
        width: max-content;
        min-width: 100%;
        height: 4rem;
        justify-content: center;
        align-items: center;
    }

    .currentSmall {
        border-radius: 15px;
        z-index: 20;
    }

    .smallNotCurrent {
        z-index: 10;
    }

    .small {
        position: relative;
        flex: 0 0 96px;
        width: 96px;
        height: 64px;
        padding: 0;
        overflow-hidden;
        background-color: var(--colorBg);
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }       

    .currentSmallImage {
        filter: brightness(110%);
    }

    .notCurrentSmallImage {
        filter: brightness(50%) contrast(125%);
    }

    .notCurrentSmallImage:hover {
        filter: brightness(75%);

    }

    .smallImage {
        object-fit: cover;
    }

    @media (max-width: 600px) {
        .container {
            padding-top: max(3.5rem, env(safe-area-inset-top));
        }

        .mainImageContainer {
            padding: 0 0.5rem 0.75rem;
        }

        .mainImageHolder {
            height: auto;
            aspect-ratio: 4 / 3;
            flex: 0 1 100%;
        }

        .buttonLeft,
        .buttonRight {
            width: 42px;
            height: 42px;
        }

        .small {
            flex-basis: 78px;
            width: 78px;
            height: 52px;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .small {
            scroll-behavior: auto;
        }
    }

`
