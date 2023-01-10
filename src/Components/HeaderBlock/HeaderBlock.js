import header_img from '../../Assets/Images/header_img.gif'
import './HeaderBlockStyle.css'

function HeaderBlock() {
    return (
        <div className="headerBlock">
            <img src={header_img} width="500px" alt="header gif" />
            <div>
                <h1>Привет</h1>
                <p>Меня зовут Балханаков Владимир</p>
                <p>и это мой сайт-резюме</p>
            </div>
        </div>
    )
}

export default HeaderBlock;