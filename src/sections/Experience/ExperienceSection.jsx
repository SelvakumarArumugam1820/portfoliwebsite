import React from 'react';
import { motion } from 'framer-motion';
import styles from './Experience.module.css';
import { experienceData } from '../../data/experienceData';
import { fadeIn, staggerContainer } from '../../animations/framerConfig';

const ExperienceSection = () => {
    return (
        <section className={`${styles.experience} experience`} id="experience">
            <div className="section-container">
                <div className={styles.header}>
                    <p className={styles.preTitle}>Professional Path</p>
                    <h2 className={styles.title}>Working <span>Journey.</span></h2>
                </div>

                <div className={styles.timeline}>
                    {experienceData.map((exp, i) => (
                        <motion.div
                            key={i}
                            variants={fadeIn('up', 'spring', i * 0.1, 0.8)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className={styles.timelineItem}
                        >
                            <div className={styles.timelineMarker}>
                                <div className={styles.dot}></div>
                                <div className={styles.line}></div>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.card}>
                                    <div className={styles.cardHeader}>
                                        <div className={styles.companyInfo}>
                                            <h3>{exp.role}</h3>
                                            <p>
                                                <a href={exp.website} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                                                    {exp.company}
                                                </a>
                                            </p>
                                        </div>
                                        <div className={styles.periodBadge}>
                                            <span>🗓️ {exp.period}</span>
                                        </div>
                                    </div>

                                    <div className={styles.divider}></div>

                                    <div className={styles.projectBlocks}>
                                        {exp.projects.map((project, pIdx) => (
                                            <div key={pIdx} className={styles.projectBlock}>
                                                <h4 className={styles.projectTitle}>{project.title}</h4>
                                                <div className={styles.techTags}>
                                                    {project.tags.map((tag, tIdx) => (
                                                        <span key={tIdx} className={styles.techTag}>{tag}</span>
                                                    ))}
                                                </div>
                                                <ul className={styles.bullets}>
                                                    {project.bullets.map((bullet, bIdx) => (
                                                        <li key={bIdx}>{bullet}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};



export default ExperienceSection;
