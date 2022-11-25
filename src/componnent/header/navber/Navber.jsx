import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from 'react-icons/im';
import { Link } from "react-router-dom";
import styles from "./navber.module.css";
export default function Navber() {
    const [nav, setNav] = useState(false);

    return (

        <nav className={styles.navberWrp}>

            <div className={styles.moboNav}>
                {nav ? <ImCross className={styles.moboIcons} onClick={() => setNav(!nav)} /> : <FaBars className={styles.moboIcons} onClick={() => setNav(!nav)} />}
            </div>
            <ol className={`${styles.NavItem} ${nav && styles.active}`}>
                <Link className={styles.link} to='/'><li><a href="#">Home</a></li></Link>
                <Link className={styles.link} to='/notice'><li><a href="#">Notice</a></li></Link>
                <Link className={styles.link} to='/admission'><li><a href="#">Admission</a></li></Link>
                <Link className={styles.link} to='/admistration'><li><a href="#">Administration</a></li></Link>

                <Link className={styles.link} to=''><li><a href="#">Contact us</a></li></Link>
                <Link className={styles.link} to='/login'><li><a href="#">Login</a></li></Link>

            </ol>
        </nav>
    )
}