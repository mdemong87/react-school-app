import styles from "./header.module.css";
import LogoName from './logoname/LogoName';
import Navber from './navber/Navber';
export default function Header() {
    return (
        <div className={styles.headerWrp}>
            <div className={styles.headerContainer}>
                <LogoName />
                <Navber />
            </div>
        </div>
    )
}
