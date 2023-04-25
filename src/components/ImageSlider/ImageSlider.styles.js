import css from "styled-jsx/css";

export default css.resolve`
.imageSlider {
    width: 100%;
    max-width: 1257px;
    min-height: 200px;
    height: auto;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    text-align: left;
    }

    .projectSlide {
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0;
        transition: opacity ease-in-out 0.4s;
      }

      .projectSlide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .active-anim {
      opacity: 1;
      }

      .container-dots {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        z-index: 10;
        }
        
        .dot {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        margin: 0 5px;
        background: var(--colorBg);
        }
        
        .dot.active {
        background: var(--colorHeaderBg);
        }
`