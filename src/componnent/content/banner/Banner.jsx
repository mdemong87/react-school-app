import { useCallback, useEffect, useState } from 'react';
import one from '../../../img/1.jpg';
import two from '../../../img/2.jpg';
import three from '../../../img/3.jpg';
import four from '../../../img/4.jpeg';
import styles from "./banner.module.css";

export default function Banner() {
    const img = [one, two, three, four];
    const [imgValue, setimgValue] = useState(0);



    //use effect inseide function
    const stateChange = useCallback(() => {
        setimgValue((prev) => {
            if (prev === img.length - 1) {
                prev = 0;
                return prev;
            }
            return prev + 1;

        });

    }, []);

    //use Effect
    useEffect(() => {
        setInterval(stateChange, 4000)
    }, []);




    return (
        <div className={styles.bannerImgWrp}>
            <img src={img[imgValue]} alt="Banner Img" />
        </div>
    )
}
