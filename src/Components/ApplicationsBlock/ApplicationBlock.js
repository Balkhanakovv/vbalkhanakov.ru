import Application from '../Application/Application';
import './ApplicationBlockStyle.css'
import { values } from './data';


const applicationItems = values.map(app =>
    <Application    
        key={app.id}  
        appName={app.appName}      
        imgPath={app.imgPath}
        alt={app.alt}
        description={app.description}
        gitURL={app.gitURL}
        downloadURL={app.downloadURL}
    />
);

function ApplicationBlock () {
    console.log(applicationItems);
    return (
        <div className='applicationBlock'>
            {applicationItems}
        </div>
    )
}

export default ApplicationBlock;