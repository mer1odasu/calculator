import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styles from './register.module.scss' 


const Register = () => {

	const navigate = useNavigate();

    return (
			<main className={styles.body}>
				<div className={styles.title}>
					<h1>Восстановление пароля</h1>
					<div className={styles.wrapper}>
							<form action="">
							<div className={styles.input_box}>
									<input type="email" placeholder="Email" required/>
									<IoMdMail className={styles.icon}/>
								</div>
								<button type="submit" className={styles.button}>Отправить</button>
							</form>
					</div>
				</div>
			</main>	
    );
};

export default Register;