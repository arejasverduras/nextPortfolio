import css from "styled-jsx/css";

export default css.resolve`
    .container {
        display: flex;
        position: relative;
        z-index: 50;
        width: 100%;
        align-items:center;
    }

    .mainImageContainer {
        width: 100%;
        overflow-hidden;
        height: fit-content;
    }

    .mainImageHolder {
        display: flex;
        justify-content: center;
        align-items:center;
        width: 100%;
        height: auto;
        
    }

    .mainImage {
        display: flex;
        position: absolute;
        width: 100%;
        max-width: 1024px;
    }

    .mainImageImage {
        width: 100%;
        height: auto;
    }


    .bottom {
        position: absolute;
        width: 100%;
        display: flex;
        flex-wrap:wrap;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        // border: 2px solid red;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        position: relative;
        
        height: 100%;

    }

    .buttonLeft {
        position: absolute;
        left: 3px;
        top: calc(50%-16px);
        color: var(--colorText);
        background-color: var(--colorBg);
        border:none;
        padding-right: 2px;
        border-radius: 100%;
        width: 50px;
        height: 50px;
        cursor:pointer;
    }

    .buttonRight {
        position: absolute;
        right: 3px;
        top: calc(50%-16px);
        color: var(--colorText);
        background-color: var(--colorBg);
        border:none;
   
        padding-left: 2px;
        border-radius: 100%;
        width: 50px;
        height: 50px;
        cursor:pointer;
    }

    .close {
        position: fixed;
        top: 20px;
        left: 20px;
        display: flex;
        align-items: center;
        
    }

    .closeButton {
        background-color: var(--colorBg);
        width: 30px;
        border-radius: 50%;
        color: var(--colorText);
        cursor: pointer;
        border: none;
    }

    .openFullSize {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        color: var(--colorText);
        background-color: var(--colorBg);
        border-radius: 100%;
        gap: 2px;
    }

    .buttonFullSize {
        position: fixed;
        top: 20px;
        right: 20px;
        color: var(--colorText);
        width: 30px;
    }

    .icon {
        width: 24px;
    }

    .bottomNavHolder {
        position: fixed;
        bottom: 0;
        width: 100%;
        overflow:hidden;
        z-index:40;
    }

    .bottomNav {
        display: flex;
        gap: 8px;
        max-width: 800px;
        margin: 1.5rem calc(50% - 100px);
        aspect-ratio: 3/2;
        height: 4.5rem;
    }

    .currentSmall {
        border-radius: 15px;
        z-index: 20;
    }

    .smallNotCurrent {
        z-index: 10;
    }

    .small {
        display: inline-block;
        position: relative;
        flex-shrink: 1;
        overflow-hidden;
        background-color: var(--colorBg);
        border: none;
        border-radius: 15px;
        overflow:hidden;
    }       

    .currentSmallImage {
        filter: brightness(110%);
        height: 100%;
        width: auto;
    
    }

    .notCurrentSmallImage {
        filter: brightness(50%) contrast(125%);
        height: 100%;
        width: auto;
    }

    .notCurrentSmallImage:hover {
        filter: brightness(75%);

    }

    .smallImage {
        border-radius: 15px;
    }

`