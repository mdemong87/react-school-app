import styles from "./input.module.css";

export default function Input({ name, type, require }) {
    return (
        <div className={styles.form}>
            <label>{name}<b className={styles.require}>{require && require}</b> </label>
            <input required={require} type={type ? type : "text"} />

        </div>
    )
}
