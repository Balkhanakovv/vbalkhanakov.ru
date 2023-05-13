import './ApplicationStyle.css';
import github_logo from '../../Assets/Images/github_dark.png';
import download_logo from '../../Assets/Images/download.png'

function Application(props) {
    return (
        <div className="applicationCard">
            <div className="itemImage">
                <img src={props.imgPath} alt={props.alt} height="100px" />
            </div>
            
            <h2>{props.appName}</h2>

            <div className="itemText">
                <p>{props.description}</p>
            </div>

            <div className="links">
                <a href={props.gitURL} target="_blank">
                    <img src={github_logo} alt="github" />
                </a>

                <a href={props.downloadURL} download="" target="_blank">
                    <img src={download_logo} alt="github" />
                </a>
            </div>
        </div>
    );
}

export default Application;