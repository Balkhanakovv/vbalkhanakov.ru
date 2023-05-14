import { Link } from 'react-router-dom';
import './NavigationStyle.css'

function Navigation() {
    return(
        <nav className='topnav'>
            <Link to="/">Главная</Link>
            <Link to="/apps">Приложения</Link>
            <Link to="/demos">Демо</Link>
        </nav>
    );
}

export default Navigation;