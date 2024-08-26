import styles from "./Button.module.scss";

const Button = ({children, clickHandler}) => {
    return (
        <div className={styles.promo__btn__wrap}>
            <button className={styles.promo__btn} onClick={clickHandler}>
                {children}
            </button>
        </div>
    );
};

export default Button;