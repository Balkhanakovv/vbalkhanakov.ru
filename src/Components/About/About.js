import './AboutStyle.css';
import Subtitle from '../Subtitle/Subtitle';
import Photo from '../Photo/Photo';

import avatar from "../../Assets/Images/avatar.jpg"

function About(props) {
    return (
        <div>
            <Subtitle text="О себе" />
            <div className='about-block'>
                <Photo imgPath={avatar} />
                <div className='about-content'>
                    <div>
                        <p align="center">Еще раз представлюсь, зовут меня Балханаков Владимир, нахожусь я в городе Новосибирск.</p>
                        <p align="justify">О моих навыках вы можете прочитать выше, а здесь я расскажу о себе. Мне 22 года и занимаюсь разработкой (как уже можно было догадаться). Для меня это не только средство заработка, но и хобби. Часто, меня переполняет желаение изучить какую-то новую технологию или язык программирования, и это дает мне не только опыт, но и хорошее настроение.
                            Но помимо IT, также увлекаюсь работой с микроконтроллерами. Знаком с ними я крайне поверхностно, доводилось поработать с разного рода Arduno и "голыми" AVR'ками. Кроме этого люблю гулять, выращивать различные комнатные растения и просто наслаждаться жизнью!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;