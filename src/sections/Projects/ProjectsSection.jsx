import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Projects.module.css';
import { projectsData } from '../../data/projectsData';
import { fadeIn, staggerContainer } from '../../animations/framerConfig';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            variants={fadeIn(index % 2 === 0 ? 'right' : 'left', 'spring', 0.2, 1)}
            whileTap={{ scale: 0.98 }}
            className={styles.projectCard}
        >
            <div className={styles.projectContent}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.tagContainer}>
                    {project.tags.map(tag => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>
            </div>

            <div className={styles.projectVisual} style={{ background: project.color + '10' }}>
                <span className={styles.iconOverlay}>{project.icon}</span>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section className={`${styles.projects} projects`} id="projects">
            <div className="section-container">
                <div className={styles.header}>
                    <p className={styles.preTitle}>Selected Work</p>
                    <h2 className={styles.title}>Featured <span>Projects.</span></h2>
                </div>

                <div className={styles.projectsGrid}>
                    <div className={styles.groupHeader}>
                        <h3 className={styles.groupTitle}>Professional Projects</h3>
                    </div>
                    {projectsData.filter(p => p.type === 'Professional').map((project, i) => (
                        <motion.div
                            key={i}
                            variants={fadeIn('up', 'spring', i * 0.1, 0.8)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className={styles.projectCard}
                        >
                            <div className={styles.cardContent}>
                                <div className={styles.category}>{project.category}</div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className={styles.techStack}>
                                    {project.tags.map((t, idx) => (
                                        <span key={idx} className={styles.techTag}>{t}</span>
                                    ))}
                                </div>
                                <ul className={styles.impactList}>
                                    {project.impact.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}

                    <div className={styles.groupHeader} style={{ marginTop: '40px' }}>
                        <h3 className={styles.groupTitle}>Academic & Research Projects</h3>
                    </div>
                    {projectsData.filter(p => p.type !== 'Professional').map((project, i) => (
                        <motion.div
                            key={i}
                            variants={fadeIn('up', 'spring', i * 0.1, 0.8)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className={styles.projectCard}
                        >
                            <div className={styles.cardContent}>
                                <div className={styles.category}>{project.category}</div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className={styles.techStack}>
                                    {project.tags.map((t, idx) => (
                                        <span key={idx} className={styles.techTag}>{t}</span>
                                    ))}
                                </div>
                                <ul className={styles.impactList}>
                                    {project.impact.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};



export default Projects;
