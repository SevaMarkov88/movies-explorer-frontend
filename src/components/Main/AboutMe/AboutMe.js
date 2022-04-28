import './AboutMe.css';
import photo from '../../../images/photo.JPG';
import Heading from "../../Heading/Heading";

function AboutMe() {
  return (
    <article className='about-me' id='about-me'>
      <Heading text='Студент'/>
      <section className='about-me__container'>
        <img className='about-me__photo' src={photo} alt='Seva, student.'/>
        <div className='about-me__texts'>
          <h1 className='about-me__heading'>Сева</h1>
          <p className='about-me__caption'>
            Фронтенд&#8209;разработчик, 33 года
          </p>
          <p className='about-me__paragraph'>
            Родился и живу в Воронеже. В 2010 получил диплом инженера в Воронежском Государственном техническом
            университете на факультете роботизации и автоматизации машиностроение, работал инженером-технологом по
            сопровождению разработки и производства изделий радиоэлектронной промышленности на АО «Концерн «Созвездие» в
            городе Воронеж, поднялся до ведущего инженера(аналог senior) за 3 года, в 2021 решился сменить профессию на
            Frontend developer, в данный момент работаю над дипломом и параллельно участвую в проектах от Яндекса, в
            конце 2021 года устроился на работу как Saleceforce developer, в компанию VRP Consulting где и работаю по
            настоящий момент.
          </p>
          <div className='about-me__social'>
            <a
              className='about-me__link'
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/vsevolod-markov-72b168169/'>
              LinkedIn
            </a>
            <a
              className='about-me__link'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/SevaMarkov88'>
              Github
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}

export default AboutMe;
