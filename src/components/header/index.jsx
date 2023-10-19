import './style.scss'
import { useNavigate } from 'react-router-dom';


export const Header = () => {

    const navigate = useNavigate();

    const navRegistratin  = () => {
        navigate('/')
    }
    const navLogin  = () => {
        navigate('/user_login')
    }

    return (
        <div className="header">
            <ul className="navList">
                <li onClick={navRegistratin}>Registration Page</li>
                <li onClick={navLogin}>Login Page</li>
            </ul>
        </div>
    )
}