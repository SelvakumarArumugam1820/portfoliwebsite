import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="section-container">
                <div className={styles.content}>
                    <div className={styles.top}>
                        <div className={styles.brand}>
                            <h2 className={styles.logo}>Selvakumar</h2>
                            <p className={styles.tagline}>Crafting excellence in every pixel.</p>
                        </div>
                        <div className={styles.social}>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <p>&copy; {currentYear} Selvakumar Arumugam. All rights reserved.</p>
                        <p className={styles.built}>Built with React & Framer Motion</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer;
