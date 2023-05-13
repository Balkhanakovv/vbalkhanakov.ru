import Navigation from "../Components/Navigation/Navigation";
import HeaderBlock from "../Components/HeaderBlock/HeaderBlock";
import Footer from "../Components/Footer/Footer"

import ApplicationBlock from "../Components/ApplicationsBlock/ApplicationBlock";
import app_header_img from '../Assets/Images/app_header_img.gif'

const headerStyle = {
    background: "#c0dbed"
  }
  
  const headerStrings = [];
  

function Apps() {
    return (
        <div>
            <Navigation />
            <HeaderBlock 
                header_img={app_header_img}
                style={headerStyle}
                h1="Приложения"
                p={headerStrings}
            />
            <ApplicationBlock  />
            <Footer />
        </div>
    )
}

export default Apps;