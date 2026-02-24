import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Timeline from '../../components/Timeline/Timeline';
import { profileData } from '../../data/profileData';
import styles from './Resume.module.css';

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.resume}
        >
            <section className={styles.heroSection}>
                <div className="container">
                    <SectionTitle
                        title="My Journey"
                        subtitle="The evolution of my skills and experience"
                        center
                    />
                </div>
            </section>

            <section className={styles.timelineSection}>
                <div className="container">
                    <div className={styles.timelineGrid}>
                        <div className={styles.column}>
                            <h3 className={styles.columnTitle}>Professional Experience</h3>
                            <Timeline items={profileData.experience} />
                        </div>

                        <div className={styles.column}>
                            <h3 className={styles.columnTitle}>Academic Foundations</h3>
                            <Timeline items={profileData.education} />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.qualificationsSection}>
                <div className="container">
                    <div className={`${styles.internshipCard} glass-card`}>
                        <h3>Industry Internships</h3>
                        <div className={styles.internshipContent}>
                            <div className={styles.internHeader}>
                                <span className={styles.internRole}>Data Science Virtual Intern</span>
                                <span className={styles.internDuration}>Jan 2023 – Apr 2023</span>
                            </div>
                            <h4 className={styles.internCompany}>Ceasura Technologies, Chennai</h4>
                            <p className={styles.internDesc}>
                                Focused on Python-based data processing and predictive modeling concepts during a cross-disciplinary industry exposure program.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Resume;
