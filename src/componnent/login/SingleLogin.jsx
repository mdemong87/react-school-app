import styles from "./singleLogin.module.css";

export default function SingleLogin({ title, FildOne, fildTwo, buttonTitle }) {
    return (
        <div className={styles.loginWRp}>
            <h2>{title}</h2>
            <input placeholder={FildOne} type={FildOne} />
            <input placeholder={fildTwo} type={fildTwo} />
            <button>{buttonTitle}</button>
        </div>
    )
}
