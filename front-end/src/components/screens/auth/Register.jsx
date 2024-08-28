import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styles from './register.module.scss' 


const Register = () => {

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
									<input type="email" placeholder="Email" required/>
									<IoMdMail className={styles.icon}/>
								</div>
								<div className={styles.input_box}>
									<input type="password" placeholder="Пароль" required/>
									<FaLock className={styles.icon}/>
								</div>
								<button type="submit" className={styles.button}>Зарегистрироваться</button>
								<div className={styles.register_link}>
									<p>У вас есть аккаунт? <a onClick={() => {navigate('/auth')}}>Войти</a></p>
								</div>
							</form>
					</div>
				</div>
			</main>	
    );
};

export default Register;