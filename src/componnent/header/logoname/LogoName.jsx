import Logo from "../../../img/logo.png";
import styles from "./logoname.module.css";


export default function LogoName() {
    return (
        <div className={styles.logonameWrp}>

            <div class={styles.logo}>
                <img src={Logo} alt="logo" />
            </div>
            <div class={styles.name}>
                <h3>Hazi Habil Uddin Ideal Academy</h3>
            </div>
        </div>
    )
}
