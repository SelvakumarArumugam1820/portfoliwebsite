import React from 'react';
import { openLinkedIn } from '../../utils/linkedinUtils';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="section-container">
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <h2 className={styles.logo}>Selvakumar Arumugam</h2>
                        <p className={styles.role}>Flutter Developer | Full Stack Engineer</p>
                    </div>

                    <div className={styles.social}>
                        <a href="#" onClick={openLinkedIn}>LinkedIn</a>
                        <span className={styles.dot}>•</span>
                        <a href="https://github.com/SelvakumarArumugam1820" target="_blank" rel="noreferrer">GitHub</a>
                    </div>

                    <div className={styles.bottom}>
                        <p>&copy; {currentYear} Selvakumar Arumugam. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer;
