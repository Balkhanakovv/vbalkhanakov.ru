import './FooterStyle.css';

import telegram_logo from '../../Assets/Images/telegram.png';
import github_logo from '../../Assets/Images/github.png';

const tURL = 'https://t.me/vbalkhanakov';
const gitURL = 'https://github.com/Balkhanakovv';

function Footer() {
    return (
        <div className="footerContainer">
            <div className="block">
                <div className="columns">
                    <a href={tURL} target="_blank">
                        <img src={telegram_logo} width="32px" alt="telegram"/>
                    </a>
                    <a href={gitURL} target="_blank">
                        <img src={github_logo} alt="github"/>
                    </a>
                </div>
                <p>© Балханаков Владимир, {new Date().getFullYear()}</p>
            </div>

        </div>
    );
}

export default Footer;