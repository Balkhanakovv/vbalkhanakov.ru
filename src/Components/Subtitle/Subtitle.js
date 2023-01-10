import './SubtitleStyle.css'

function Subtitle (props) {
    return (
    <div className="subtitle">
        <h3>{props.text}</h3>
    </div>
    );
}

export default Subtitle;