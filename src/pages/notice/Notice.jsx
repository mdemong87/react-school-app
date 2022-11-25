import TrandToday from "../../componnent/content/trandToday/TrandToday";
import Footer from "../../componnent/footer/Footer";
import Header from "../../componnent/header/Header";
import Notic from "../../componnent/Notic/Notic";
import styles from "./notice.module.css";

export default function notice() {
    return (
        <div className='container'>
            <div className={styles.header}>
                <Header />
            </div>

            <div className={styles.notice}>
                <TrandToday clasname={true} />
                <Notic />
            </div>

            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}

