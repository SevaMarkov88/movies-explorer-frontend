import React from "react";
import Section from "../Section/Section";
import MyPhoto from "../../images/photo.jpg";

function Main(props) {
    return (
        <Section
            title="Студент"
            id={props.id}
        >
            <div className="about-me">
                <div className="about-me__row">
                    <div className="about-me__text">
                        <h3 className="about-me__name">Сева</h3>
                        <p className="about-me__job">Фронтенд&#8209;разработчик, 33 годаа</p>
                        <p className="about-me__characteristic">Родился и живу в Воронеже. В 2010 получил диплом инженера в Воронежском Государственном техническом
                            университете на факультете роботизации и автоматизации машиностроение, работал инженером-технологом по
                            сопровождению разработки и производства изделий радиоэлектронной промышленности на АО «Концерн «Созвездие» в
                            городе Воронеж, поднялся до ведущего инженера(аналог senior) за 3 года, в 2021 решился сменить профессию на
                            Frontend developer, в данный момент работаю над дипломом и параллельно участвую в проектах от Яндекса, в
                            конце 2021 года устроился на работу как Saleceforce developer, в компанию VRP Consulting где и работаю по
                            настоящий момент.</p>
                        <div>
                            <a className="about-me__social" href="https://www.facebook.com/">Facebook</a>
                            <a className="about-me__social" href="https://github.com/SevaMarkov88/'">Github</a>
                        </div>
                    </div>
                    <img className="about-me__author" src={MyPhoto} alt="Автор"/>
                </div>
            </div>
        </Section>
    );
}

export default Main;
