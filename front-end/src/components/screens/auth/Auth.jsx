import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from './auth.module.scss' 


const Auth = () => {

	const navigate = useNavigate();

    return (
			<main className={styles.body}>
				<div className={styles.title}>
					<h1>Войти в аккаунт</h1>
					<div className={styles.wrapper}>
							<form action="">
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
									<a onClick={() => {navigate('/forgot-password')}}>Забыли пароль?</a>
								</div>
								<button type="submit" className={styles.button}>Войти</button>
								<div className={styles.register_link}>
									<p>У вас нет аккаунта? <a onClick={() => {navigate('/register')}}>Зарегистрироваться</a></p>
								</div>
							</form>
					</div>
				</div>
			</main>	
    );
};

export default Auth;