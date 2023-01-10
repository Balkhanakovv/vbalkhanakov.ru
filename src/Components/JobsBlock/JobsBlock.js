import Subtitle from "../Subtitle/Subtitle";
import Job from "../Job/Job";
import './JobsBlockStyle.css';

import sibsutis_logo from "../../Assets/Images/sibguti_logo.png";
import bpmlab_logo from "../../Assets/Images/BPMLab_logo.png";
import sgk_logo from "../../Assets/Images/sgk-logo.svg";

function JobsBlock() {
    return (
        <div>
            <Subtitle text="Места работы" />

            <Job
                organizationName="СибГУТИ"
                period="Май 2020 — ноябрь 2020"
                position="Лаборант"
                description="Оформление документации, ведение отчетности, редактирование методических пособий."
                imgPath={sibsutis_logo}
                alt="sibsutis"
            />

            <hr />

            <Job
                organizationName='ООО "Лаборатория БПМ"'
                period="Ноябрь 2021 — по настоящее время"
                position="Программист-разработчик"
                description="Fullstack-разработчик. Доработка существующих решений для системы управления бизнес-процессами ELMA. Создание сценариев в бизнес-процессах. Доработка модулей (расширения системы)."
                imgPath={bpmlab_logo}
                alt="bpmlab"
            />

            <hr />

            <Job
                organizationName='Сибирская Генерирующая Компания'
                period="Июнь 2022 — Сентябрь 2022"
                position="Программист-разработчик"
                description="Модернизация внутренних информационных систем. Доработка существующих десктоп приложений, микросервисов."
                imgPath={sgk_logo}
                alt="sgk"
            />
        </div>
    );
}

export default JobsBlock;