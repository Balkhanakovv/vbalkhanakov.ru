import './JobStyle.css'

function Job(props) {
    return (
        <div className="contentJobs">
            <div className="note">
                <p className="title">{props.organizationName}</p>
                <p>{props.period}</p>
                <p className="position">{props.position}</p>
                <p>{props.description}</p>
            </div>
            <div className="noteImg">
                <img src={props.imgPath} width="150px" alt={props.alt} />
            </div>
        </div>
    );
}

export default Job;