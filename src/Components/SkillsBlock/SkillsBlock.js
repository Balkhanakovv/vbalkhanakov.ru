import './SkillsBlockStyle.css';
import Subtitle from '../Subtitle/Subtitle';
import Skill from '../Skill/Skill';
import { values } from './data';

const skillItems = values.map(skill =>
    <Skill    
        key={skill.id}        
        imgPath={skill.imgPath}
        alt={skill.alt}
        description={skill.description}
    />
);

function SkillsBlock() {
    return (
        <div>
            <Subtitle text="Мои навыки" />

            <div className="contentSkills">
                {skillItems}
            </div>
        </div>
    );
}

export default SkillsBlock;