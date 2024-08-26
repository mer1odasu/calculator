import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import styles from './auth.module.scss' 


const Auth = () => {
    return (
        <div className={styles.wrapper}>
            <form action="">
							<h1>Войти</h1>
							<div className={styles.input_box}>
								<input type="text" placeholder="Имя пользователя" required/>
								<FaUser className={styles.icon}/>
							</div>
							<div className={styles.input_box}>
								<input type="password" placeholder="Пароль" required/>
								<FaLock className={styles.icon}/>
							</div>
							<div className={styles.remember_forgot}>
								<label><input type="checkbox"/>Запомниь меня</label>
								<a href="#">Забыли пароль?</a>
							</div>
							<button type="submit">Войти</button>
							<div className={styles.register_link}>
								<p>У вас нет аккаунта? <a href="#">Зарегистрироваться</a></p>
							</div>
						</form>
        </div>
    );
};

export default Auth;