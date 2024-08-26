import styles from "./Menu.module.scss";
import {menu} from "./menu.data.js";
import {Link} from "react-router-dom";

const Menu = () => {

    const logoutHandler = () => {}

    return (
        <nav className={styles.menu}>
            <ul>
                {menu.map((item, index) =>
                    <li key={`_menu_${index}`}>
                        <Link className={styles.li__text} to={item.link}>{item.title}</Link>
                    </li>
                )}
                <li className={styles.li__text}>
                    <button onClick={logoutHandler}>Выйти</button>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;