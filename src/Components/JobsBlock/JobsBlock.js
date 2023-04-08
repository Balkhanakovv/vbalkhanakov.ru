import Subtitle from "../Subtitle/Subtitle";
import Job from "../Job/Job";
import './JobsBlockStyle.css';
import { values } from "./data";

const jobItems = values.map(item => 
    <Job
        key = {item.id}
        organizationName = {item.organizationName}
        period = {item.period}
        position = {item.position}
        description = {item.description}
        imgPath = {item.imgPath}
        alt = {item.alt}
    />
);

function JobsBlock() {
    return (
        <div>
            <Subtitle text="Места работы" />

            {jobItems}
        </div>
    );
}

export default JobsBlock;