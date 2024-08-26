import styles from './Header.module.scss'
import Menu from "../menu/Menu.jsx";
import {useAuth} from "../../../hooks/useAuth.js";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const {isAuth} = useAuth();

    const navigate = useNavigate()

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__row}>
                    <div className={styles.header__logo}>
                        <button onClick={() => {navigate('/')}}>
                            Нарушениям.Нет
                        </button>
                    </div>
                    <Menu />
                </div>
            </div>
        </header>
    );
};

export default Header;