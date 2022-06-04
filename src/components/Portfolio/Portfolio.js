import React from "react";

function Portfolio() {
    return (
        <div className="portfolio">
            <div className="portfolio__container">
                <h3 className="portfolio__subtitle">Портфолио</h3>
                <a className="portfolio__project" href="https://github.com/SevaMarkov88/how-to-learn" target="_blank" rel="noreferrer">Статичный сайт</a>
                <a className="portfolio__project" href="https://sevamarkov88.github.io/russian-travel/" target="_blank" rel="noreferrer">Адаптивный сайт</a>
                <a className="portfolio__project" href="https://github.com/SevaMarkov88/react-mesto-api-full" target="_blank" rel="noreferrer">Одностраничное приложение</a>
            </div>
        </div>
    );
}

export default Portfolio;
