import React from 'react';
import styles from './Attribution.module.css';
import { useLocation } from 'react-router-dom';

const Attribution = () => {
    const location = useLocation();

    if (location.pathname === '/') {
        return (
            <div>
                <a
                    className={styles.attribution}
                    href='https://www.freepik.com/free-photo/model-demonstrating-earrings-ring_13527449.htm#query=jewelry&position=0&from_view=search&track=sph'
                >
                    Image by serhii_bobyk on Freepik
                </a>
             </div>
        )
    }
    else {
        return null;
    }
};

export default Attribution;