import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`${styles.card} glass neon-border`}
        >
            <div className={styles.imageSection}>
                <div className={styles.overlay} style={{ background: `linear-gradient(to bottom, transparent, ${project.color}33)` }}></div>
                <div className={styles.placeholder}>
                    <span>{project.title.charAt(0)}</span>
                </div>
                <div className={styles.categoryBadge}>{project.category}</div>
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.shortDesc}>{project.description}</p>

                <div className={styles.techTags}>
                    {project.tags?.slice(0, 3).map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                    {project.tags?.length > 3 && <span className={styles.tag}>+ {project.tags.length - 3}</span>}
                </div>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={styles.viewBtn}
                >
                    {isExpanded ? 'Show Less' : 'View Details'}
                </button>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className={styles.expandedContent}
                        >
                            <div className={styles.divider}></div>
                            <p className={styles.longDesc}>{project.longDescription}</p>
                            <h4 className={styles.featureTitle}>Key Features:</h4>
                            <ul className={styles.featureList}>
                                {project.features?.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
