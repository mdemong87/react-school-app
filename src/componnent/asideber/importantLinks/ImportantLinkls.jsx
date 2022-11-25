import styles from "./importantLinks.module.css";

export default function ImportantLinkls() {
    return (
        <div className={styles.inportamtLinkWrp}>
            <div className={styles.mainiiiTitle}>
                <h4>importants Notice</h4>
            </div>
            <div className={styles.importantsLink}>
                <ul>
                    <li><a href="#">State of Prime Minister</a></li>
                    <li><a href="#">Education Board Result</a></li>
                    <li><a href="#">Teacher Station</a></li>
                    <li><a href="#">Education Board Result</a></li>
                    <li><a href="#">Teacher Station</a></li>
                </ul>
            </div>
        </div>
    )
}

