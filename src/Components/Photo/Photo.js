import './PhotoStyle.css';

function Photo (props) {
    return (
        <div>
            <img className="circle-image" src={props.imgPath}/>
        </div>
    );
}

export default Photo;