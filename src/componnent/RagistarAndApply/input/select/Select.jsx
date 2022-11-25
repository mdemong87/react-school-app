import styles from "./select.module.css";

export default function Select({ label, require, length, value }) {
    const item = [];
    for (var i = 0; i < length; i++) {
        const div = <option className={styles.seleItem} value={value[i]}>{value[i]}</option>
        item.push(div);
    }
    return (
        <div className={styles.mainDiv} >
            <label>{label}<b className={styles.require}>{require && require}</b></label>
            <select className={styles.selectWrp}>
                {item}
            </select>
        </div>
    )
}
