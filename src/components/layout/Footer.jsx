import React from 'react';
import styles from './Footer.module.css';
import facebookIcon from '../../assets/images/socials/facebook.png';
import instagramIcon from '../../assets/images/socials/instagram.png';
import snapchatIcon from '../../assets/images/socials/snapchat.png';
import twitterIcon from '../../assets/images/socials/twitter.png';
import Attribution from './Attribution';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div></div>
      <div className={styles.socials__container}>
        <p>Follow us on social media</p>
        <div className={styles.socials__icons}>
          <a href='https://www.facebook.com/'>
            <img src={facebookIcon} alt='Facebook' />
          </a>
          <a href='https://www.instagram.com/'>
            <img src={instagramIcon} alt='Instagram' />
          </a>
          <a href='https://www.snapchat.com/'>
            <img src={snapchatIcon} alt='Snapchat' />
          </a>
          <a href='https://twitter.com/'>
            <img src={twitterIcon} alt='Twitter' />
          </a>
        </div>
      </div>
      <Attribution />
    </footer>
  );
};

export default Footer;
