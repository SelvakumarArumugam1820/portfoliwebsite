import React from 'react';
import { motion } from 'framer-motion';
import styles from './Timeline.module.css';
import { profileData } from '../../data/profileData';
import { fadeIn, staggerContainer } from '../../animations/framerConfig';

const TimelineItem = ({ data, index, isEducation }) => {
    return (
        <motion.div
            variants={fadeIn('up', 'spring', index * 0.1, 1)}
            className={styles.item}
        >
            <div className={styles.marker}>
                <div className={styles.dot}></div>
                <div className={styles.line}></div>
            </div>

            <div className={`${styles.card} glass`}>
                <div className={styles.timeBadge}>{data.duration}</div>
                <h3 className={styles.role}>{isEducation ? data.degree : data.role}</h3>
                <p className={styles.org}>{isEducation ? data.institution : data.company}</p>

                {data.score && <span className={styles.score}>{data.score}</span>}

                {!isEducation && (
                    <ul className={styles.points}>
                        {data.points?.map((p, i) => (
                            <li key={i}>{p}</li>
                        ))}
                    </ul>
                )}
            </div>
        </motion.div>
    );
};

const Timeline = () => {
    return (
        <section className="section-container" id="experience">
            <div className={styles.dualGrid}>
                {/* Experience Side */}
                <motion.div
                    variants={staggerContainer(0.2, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <div className={styles.header}>
                        <h2 className={styles.title}>Track <span>Record</span></h2>
                        <p className={styles.subtitle}>Professional journey</p>
                    </div>
                    <div className={styles.column}>
                        {profileData?.experience?.map((item, index) => (
                            <TimelineItem key={index} data={item} index={index} isEducation={false} />
                        ))}
                    </div>
                </motion.div>

                {/* Education Side */}
                <motion.div
                    variants={staggerContainer(0.2, 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <div className={styles.header}>
                        <h2 className={styles.title}>Core <span>Logic</span></h2>
                        <p className={styles.subtitle}>Education journey</p>
                    </div>
                    <div className={styles.column}>
                        {profileData?.education?.map((item, index) => (
                            <TimelineItem key={index} data={item} index={index} isEducation={true} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Timeline;
