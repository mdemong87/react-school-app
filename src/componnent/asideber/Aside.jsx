import styles from "./asideber.module.css";
import ImportantLinkls from "./importantLinks/ImportantLinkls";
import Menu from "./menu/Menu";

export default function Aside() {
    return (
        <div className={styles.asideWer}>
            <Menu />
            <ImportantLinkls />
        </div >
    )
}
