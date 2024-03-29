import './AboutStyle.css';
import Subtitle from '../Subtitle/Subtitle';
import Photo from '../Photo/Photo';

import avatar from "../../Assets/Images/avatar.jpg"

function getAge(birthDate) {
    return Math.trunc((new Date() - birthDate) / 31536000000);
}

function About(props) {
    return (
        <div>
            <Subtitle text="О себе" />
            <div className='about-block'>
                <Photo imgPath={avatar} />
                <div className='about-content'>
                    <div>
                        <p align="center">Еще раз представлюсь, зовут меня Балханаков Владимир, нахожусь я в городе Новосибирск.</p>
                        <p align="justify">О моих навыках вы можете прочитать выше, а здесь я расскажу о себе. Мне {getAge(new Date(2000, 8, 30))} года и я занимаюсь разработкой (как уже можно было догадаться). Для меня это не только средство заработка, но и хобби. Часто, меня переполняет желаение изучить какую-то новую технологию или язык программирования, и это дает мне не только опыт, но и хорошее настроение.
                            Помимо IT, также увлекаюсь работой с микроконтроллерами. Знаком с ними я крайне поверхностно, доводилось поработать с разного рода Arduino и "голыми" AVR'ками. Увлекаюсь автомобильной темой. Кроме этого люблю путешествовать, выращивать различные комнатные растения и просто наслаждаться жизнью!✌</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;