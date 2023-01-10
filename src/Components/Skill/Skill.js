import './SkillStyle.css'

function Skill (props) {
    return (
        <div className="card">
            <div className="item-image">
                <img src={props.imgPath} alt={props.alt} height="100px"/>
            </div>
            <div className="item-text">
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Skill;