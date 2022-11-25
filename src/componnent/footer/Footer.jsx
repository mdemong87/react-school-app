import { AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import styles from "./footer.module.css";


export default function Footer() {
    return (
        <div className={styles.footerWrp}>
            <div>
                <h4 className={styles.footerhadering}>Get in Touch</h4>
                <ul>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Campus Contact</a></li>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Meet With Us</a></li>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Report Copyright Infringement</a></li>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Report on Security Issues</a></li>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Privacy Statement</a></li>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Recom. For Traffic Mgt</a></li>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Newsletters</a></li>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Covid-19 updates</a></li>
                </ul>
            </div>
            <div>
                <h4 className={styles.footerhadering}>Branding</h4>
                <ul>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Campus Contact</a></li>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Meet With Us</a></li>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Report Copyright Infringement</a></li>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Report on Security Issues</a></li>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Privacy Statement</a></li>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Recom. For Traffic Mgt</a></li>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Newsletters</a></li>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Covid-19 updates</a></li>
                </ul>
            </div>
            <div>
                <h4 className={styles.footerhadering}>Useful Links</h4>
                <ul>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Campus Contact</a></li>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Meet With Us</a></li>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Report Copyright Infringement</a></li>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Report on Security Issues</a></li>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Privacy Statement</a></li>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Recom. For Traffic Mgt</a></li>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Newsletters</a></li>
                    <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Covid-19 updates</a></li>
                </ul>
            </div>
            <div>
                <h4 className={styles.footerhadering}>Subscribe Us!</h4>
                <div className={styles.Subscribe}>
                    <input type="email" placeholder="Enter Email Address" />
                    <button>Subscribe</button>
                </div>
                <h4 className={styles.footerhadering}>Connect With Us</h4>
                <div className={styles.Connect}>
                    <div className={styles.Cfacebook}><FaFacebookF className={styles.contaceIcons} /></div>
                    <div className={styles.Ctwitter}><AiOutlineTwitter className={styles.contaceIcons} /></div>
                    <div className={styles.cInsta}><AiFillInstagram className={styles.contaceIcons} /></div>
                    <div className={styles.Cin}><AiFillLinkedin className={styles.contaceIcons} /></div>
                    <div className={styles.cWhats}><IoLogoWhatsapp className={styles.contaceIcons} /></div>
                    <div className={styles.cMail}><GrMail className={styles.contaceIcons} /></div>
                </div>
            </div>





            <div className={styles.copyRight}>Copyright © 2022
                Hazi Habil Uddin Ideal Academy. All Rights Reserved.</div>
        </div>
    )
}
