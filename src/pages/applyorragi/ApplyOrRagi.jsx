import Footer from "../../componnent/footer/Footer";
import Header from "../../componnent/header/Header";
import RagistarAndApply from "../../componnent/RagistarAndApply/RagistarAndApply";
import styles from "./applyOrRagi.module.css";
export default function ApplyOrRagi() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header />
            </div>

            <div className={styles.applyOrRagi}>
                <RagistarAndApply />
            </div>

            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}
