import Subtitle from '../Subtitle/Subtitle';
import '../Job/JobStyle.css';

function Education(props) {
    return (
        <div>
            <Subtitle text="Образование" />
            <div className="contentJobsDark">                
                <div className="noteImg">
                    <img src={props.imgPath} height="360px" alt={props.alt} />
                </div>
                <div className="note">
                    <p className="title">{props.universityName}</p>
                    <p>{props.period}</p>
                    <p className="position">{props.direction}</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Education;