import React from 'react';
import { motion } from 'framer-motion';
import styles from './Education.module.css';
import { fadeIn, staggerContainer } from '../../animations/framerConfig';

const educationData = [
    {
        degree: "Master of Computer Applications (MCA)",
        school: "Dhanalakshmi Srinivasan Engineering College, Perambalur",
        period: "2023 – 2025",
        grade: "CGPA: 8.1",
        icon: "🎓"
    },
    {
        degree: "Bachelor of Computer Applications (BCA)",
        school: "National College, Tiruchirappalli",
        period: "2020 – 2023",
        grade: "CGPA: 7.8",
        icon: "📜"
    },
    {
        degree: "HSC & SSLC",
        school: "Theakesar Alai Higher Secondary School",
        period: "Manapparai, Trichy",
        grade: "",
        icon: "🏫"
    }
];

const Education = () => {
    return (
        <section className={`${styles.education} education alternate-bg`} id="education">
            <div className="section-container">
                <motion.div
                    variants={fadeIn('right', 'spring', 0.2, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <p className={styles.preTitle}>Academic Background</p>
                    <h2 className={styles.title}>Education <span>History.</span></h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer(0.1, 0)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className={styles.content}
                >
                    <div className={styles.mainGrid}>
                        {/* Primary Card - MCA */}
                        <motion.div
                            variants={fadeIn('up', 'spring', 0.1, 1)}
                            className={`${styles.card} ${styles.primaryCard}`}
                        >
                            <div className={styles.cardHeader}>
                                <span className={styles.icon}>{educationData[0].icon}</span>
                                <div className={styles.mainInfo}>
                                    <h3 className={styles.primaryTitle}>{educationData[0].degree}</h3>
                                    <p className={styles.school}>{educationData[0].school}</p>
                                </div>
                            </div>
                            <div className={styles.details}>
                                <span className={styles.period}>🗓️ {educationData[0].period}</span>
                                <span className={styles.gradeBadge}>{educationData[0].grade}</span>
                            </div>
                        </motion.div>

                        {/* Secondary Card - BCA */}
                        <motion.div
                            variants={fadeIn('up', 'spring', 0.2, 1)}
                            className={`${styles.card} ${styles.secondaryCard}`}
                        >
                            <div className={styles.cardHeader}>
                                <span className={styles.icon}>{educationData[1].icon}</span>
                                <div className={styles.mainInfo}>
                                    <h3 className={styles.secondaryTitle}>{educationData[1].degree}</h3>
                                    <p className={styles.school}>{educationData[1].school}</p>
                                </div>
                            </div>
                            <div className={styles.details}>
                                <span className={styles.period}>🗓️ {educationData[1].period}</span>
                                <span className={styles.gradeBadge}>{educationData[1].grade}</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Minimal Block - HSC & SSLC */}
                    {/* Secondary Card - HSC & SSLC */}
                    <motion.div
                        variants={fadeIn('up', 'spring', 0.3, 1)}
                        className={`${styles.card} ${styles.secondaryCard}`}
                    >
                        <div className={styles.cardHeader}>
                            <span className={styles.icon}>{educationData[2].icon}</span>
                            <div className={styles.mainInfo}>
                                <h3 className={styles.secondaryTitle}>{educationData[2].degree}</h3>
                                <p className={styles.school}>{educationData[2].school}</p>
                            </div>
                        </div>

                        <div className={styles.details}>
                            <span className={styles.period}>📍 {educationData[2].period}</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};


export default Education;
