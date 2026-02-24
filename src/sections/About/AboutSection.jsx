import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Layers } from 'lucide-react';
import styles from './About.module.css';
import { fadeIn, staggerContainer } from '../../animations/framerConfig';

const AboutSection = () => {
    return (
        <section className={`${styles.about} about alternate-bg`} id="about">
            <div className="section-container">
                <div className={styles.mainGrid}>
                    <motion.div
                        variants={fadeIn('right', 'spring', 0.2, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className={styles.contentSide}
                    >
                        <p className={styles.preTitle}>Creative Developer</p>
                        <h2 className={styles.title}>Creative Flutter Developer & <span>Mobile Application Specialist</span></h2>
                        <p className={styles.paragraph}>
                            I am a Flutter-focused Software Developer at Vaanam Technologies, building scalable mobile and web solutions that combine performance, reliability, and user-centric design. With hands-on experience in real-world product development, I contribute to delivering production-ready applications that solve practical business challenges.
                        </p>
                        <p className={styles.paragraph}>
                            My approach blends clean architecture principles with collaborative teamwork, ensuring that every solution is maintainable, efficient, and aligned with long-term product goals.
                        </p>
                        <ul className={styles.valueList}>
                            <li>Clean Architecture & API Integration</li>
                            <li>Production-Ready Mobile Apps</li>
                            <li>Scalable Backend Systems</li>
                        </ul>
                    </motion.div>

                    <div className={styles.highlightsGrid}>
                        <motion.div
                            variants={fadeIn('up', 'spring', 0.1, 1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className={styles.highlightCard}
                        >
                            <span className={styles.icon}><Zap size={28} /></span>
                            <h3>Fast Delivery</h3>
                            <p>Optimized workflows for rapid and stable product launches.</p>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 'spring', 0.2, 1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className={styles.highlightCard}
                        >
                            <span className={styles.icon}><Target size={28} /></span>
                            <h3>Precision</h3>
                            <p>Meticulous attention to detail in UI and architecture.</p>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 'spring', 0.3, 1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className={styles.highlightCard}
                        >
                            <span className={styles.icon}><Layers size={28} /></span>
                            <h3>Modern Stack</h3>
                            <p>Utilizing the latest and most efficient technologies.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
