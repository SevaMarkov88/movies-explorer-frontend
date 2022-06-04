import './Promo.css';
import {ReactComponent as PromoImg} from "../../images/promo.svg";

function Promo() {
    return (
        <section className='promo'>
            <h1 className='promo__heading'>
                Учебный проект студента факультета Веб&#8209;разработки.
            </h1>
            <PromoImg className='promo__img'/>
        </section>
    );
}

export default Promo;
