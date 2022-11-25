import Footer from "../../componnent/footer/Footer";
import Header from "../../componnent/header/Header";
import SingleLogin from "../../componnent/login/SingleLogin";
import styles from "./login.module.css";
export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header />
            </div>

            <div className={styles.singlelogin}>
                <SingleLogin title="Student Login" fildTwo='Password' FildOne='Email' buttonTitle="Login" />
            </div>

            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}
