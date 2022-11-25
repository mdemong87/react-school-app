import { Link } from "react-router-dom";
import styles from "./menu.module.css";

export default function
    () {
    return (
        <div class={styles.menuWrp}>
            <h3>Menu</h3>
            <ul>
                <Link to='/'><li><a href="#">Home</a></li></Link>
                <Link to='/notice'><li><a>Notic</a></li></Link>
                <Link to='/classroutine'> <li><a href="#">Class Routine</a></li></Link>
                <Link to='/sylebus'> <li><a href="#">Syllabus</a></li></Link>
                <Link to='/examroutine'><li><a href="#">Exam Routine</a></li></Link>
                <Link to='/notice'><li><a href="#">Exam Result</a></li></Link>
                <Link to='/apply'><li><a href="#">Online Registration</a></li></Link>
                <Link to='/notice'><li><a href="#">Exam Admit Card</a></li></Link>
                <Link to='/notice'><li><a href="#">School Cartificate</a></li></Link>
                <Link to='/login'><li><a href="#">Login</a></li></Link>
            </ul >
        </div >
    )
}
