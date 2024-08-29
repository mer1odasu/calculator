import styles from '/src/components/layout/promo/Promo.module.scss'
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../../hooks/useAuth.js";

const Promo = () => {

    const navigate = useNavigate();

    const {isAuth} = useAuth()

    return (
        <section className={styles.promo}>
					homepage!
        </section>
    );
};

export default Promo;