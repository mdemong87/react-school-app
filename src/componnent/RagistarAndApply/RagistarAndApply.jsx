import { useState } from "react";
import Four from "./four/Four";
import NextAndPrev from "./nextAndPrev/NextAndPrev";
import One from "./one/One";
import Prograssber from "./progessbar/Prograssber";
import styles from "./ragistarAnsApply.module.css";
import Three from "./three/Three";
import Two from './two/Two';

export default function RagistarAndApply() {

    const [rander, setrander] = useState(1);
    return (
        <form className={styles.RAndAWrp}>
            <h2>Students Registrations</h2>
            <Prograssber rander={rander} setrander={setrander} />
            {rander === 1 && <One />}
            {rander === 2 && <Two />}
            {rander === 3 && <Three />}
            {rander === 4 && <Four />}
            <NextAndPrev rander={rander} setrander={setrander} />
        </form>
    )
}
