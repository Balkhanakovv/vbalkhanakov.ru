import './SkillsBlockStyle.css';
import Subtitle from '../Subtitle/Subtitle';
import Skill from '../Skill/Skill';

import csharp_logo from '../../Assets/Images/Csharp_Logo.png';
import js_logo from '../../Assets/Images/JavaScript-logo.png';
import elma_logo from '../../Assets/Images/elma.png';
import sql_logo from '../../Assets/Images/sql_logo.png';
import linux_logo from '../../Assets/Images/linux_logo.png';

function SkillsBlock() {
    return (
        <div>
            <Subtitle text="Мои навыки" />

            <div className="contentSkills">
                <Skill imgPath={csharp_logo}
                    alt="C#"
                    description=".NET - мое основное направлние. Знаю как сам язык, так и фреймворки, с которыми он чаще всего
                    используется. В частности EntityFramework и ASP." />
                <Skill imgPath={js_logo}
                    alt="JS"
                    description="В последнее время пишу на JS/TS, в ближайшее время было бы не плохо освоить какой-нибудь фреймворк :P" />
                <Skill imgPath={elma_logo}
                    alt="elma" 
                    description="А вообще, занимаюсь внедрением BPM-системы ELMA. Знаю как ELMA3/4, так и ELMA365." />
                <Skill imgPath={sql_logo} 
                    alt="SQL" 
                    description="Кроме этого неплохо знаю SQL. Был опыт настройки и администрирования различных СУБД (PostgreSQL, MS
                        SQL)." />
                <Skill imgPath={linux_logo}
                    alt="linux" 
                    description="Люблю Linux, не боюсь терминала) Душа больше лежит к Deb-дистрибутивам." />
            </div>
        </div>
    );
}

export default SkillsBlock;