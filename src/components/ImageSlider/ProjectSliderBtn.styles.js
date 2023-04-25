import css from "styled-jsx/css";

export default css.resolve`
.btn-slide {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: transparent;
    border: none;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 3;
    }
    
    .btn-slide img {
        width: 25px;
        height: 25px;
        pointer-events: none;
        stroke: var(--colorBorders);
    }
    
    .prev {
    top: 50%;
    left: 20px;
    transform: translateY(-60%);
    }
    
    .next {
    top: 50%;
    right: 20px;
    transform: translateY(-60%);
    }
`