import React from 'react';
import { motion } from 'framer-motion';
import styles from './Internship.module.css';
import { fadeIn, staggerContainer } from '../../animations/framerConfig';

const Internship = () => {
    return (
        <section className={`${styles.internship} internship`} id="internship">
            <div className="section-container">
                <motion.div
                    variants={fadeIn('left', 'spring', 0.2, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <p className={styles.preTitle}>Early Professional Growth</p>
                    <h2 className={styles.title}>Virtual <span>Internship.</span></h2>
                </motion.div>

                <div className={styles.container}>
                    <motion.div
                        variants={fadeIn('up', 'spring', 0.1, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className={styles.card}
                    >
                        <div className={styles.cardHeader}>
                            <h3>Data Science Virtual Internship</h3>
                            <span className={styles.company}>Ceasura Technologies, Chennai</span>
                            {/* <a href="https://ceasura.in" target="_blank" rel="noreferrer" className={styles.websiteLink}>
                                Visit Website
                            </a> */}
                        </div>

                        <div className={styles.period}>
                            <span>🗓️ January 2023 – April 2023</span>
                        </div>

                        <ul className={styles.bullets}>
                            <li>Specialized in dataset analysis fundamentals and data preprocessing techniques.</li>
                            <li>Explored predictive modeling basics and statistical analysis during the virtual tenure.</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


export default Internship;
