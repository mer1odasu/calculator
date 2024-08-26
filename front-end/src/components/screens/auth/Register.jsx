import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import styles from './register.module.scss' 


const Register = () => {
    return (
        <div className={styles.wrapper}>
            <form action="">
							<h1>Зарегистрироваться</h1>
							<div className={styles.input_box}>
								<div className="input_field">
									<input type="text" placeholder="Логин" required/>
								</div>
								<div className="input_field">
									<input type="email" placeholder="Email" required/>
									<MdEmail className={styles.icon}/>
								</div>
							</div>
							<div className={styles.input_box}>
								<div className="input_field">
									<input type="password" placeholder="Пароль" required/>
									<FaLock className={styles.icon}/>
								</div>
								<div className="input_field">
									<input type="text" placeholder="Фамилия" required/>
								</div>
							</div>
							<div className={styles.input_box}>
								<div className="input_field">
									<input type="text" placeholder="Имя" required/>
								</div>
								<div className="input_field">
									<input type="text" placeholder="Отчество" required/>
								</div>
							</div>
							<button type="submit">Зарегистрироваться</button>
							<div className={styles.register_link}>
								<p>У вас есть аккаунт? <a href="#">Войти</a></p>
							</div>
						</form>
        </div>
    );
};

export default Register;