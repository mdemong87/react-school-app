import Aside from "../../componnent/asideber/Aside";
import Content from "../../componnent/content/Content";
import Footer from "../../componnent/footer/Footer";
import Header from "../../componnent/header/Header";
import RightAsideber from "../../componnent/rightAsideber/RightAsideber";
import styles from "./home.module.css";
export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header />
            </div>

            <div className={styles.asideleft}>
                <Aside />
            </div>
            <div className={styles.content}>
                <Content />
            </div>
            <div className={styles.asideright}>
                <RightAsideber />
            </div>

            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}
