import css from "styled-jsx/css";

export default css.resolve`
.container {
    margin-top: 20px;
    min-width: 100%;
    border: 1px solid var(--colorBorders);
    background-color: var(--colorBg);
    border-radius: 25px;
    cursor:pointer;
}

.onPageContainer {
    display: flex;
    flex-wrap: wrap;
}


.content {
    display: flex;
    align-items: center;
    padding: 20px;
    height: 100%;
}

.onPageContent {
    display: grid;
    width: 100%;
    padding: 20px;
    grid-template-areas: 
    "logo" 
    "text"
    "links";
}

.logo {
    width: 150px;
    height: 150px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-shrink: 0;
}

.onPageLogo {
    grid-area: logo;
    max-width: 100px;
}



.logoImage {
    width: 100%;
    height: auto;
}

.images {
    border: 1px solid var(--colorBorders);
    border-radius: 25px;
    margin: 20px 0;
    display: flex;

    overflow: hidden;
}

.textContent {
    padding: 0 20px;
    max-width: 400px;
}

.onPageTextContent {
    grid-area: text;
    padding: 20px 0 0 0 ;
    max-width: 800px;
}

.description {
    text-decoration: none;
    color: var(--colorText);
}

.onPageDescription {
    max-width: 600px;
}

.techHolder {
    gap: 8px;
    margin-top: 16px;
}

.projectLinks {
    grid-area: links;
}

@media screen and (max-width: 420px) {
    .content {
        flex-wrap:wrap;
    }
    
    .logo {
        // align-items: center;
    }

    .textContent {
        padding: 20px 0;
    }
}

@media screen and (min-width: 768px) {
    .container {
        min-height: 200px;
        min-width: 0;
        max-width: 49%;
    }

    .onPageContainer {
        max-width: 100%;
    }

    .content {
        max-width: 100%;
        padding: 10px;
    }

    .onPageContent {
        padding: 20px;
    }
}
`