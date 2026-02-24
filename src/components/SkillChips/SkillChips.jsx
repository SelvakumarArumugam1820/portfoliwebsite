import React from 'react';
import styles from './SkillChips.module.css';
import { motion } from 'framer-motion';

const SkillChips = ({ skills, title }) => {
    return (
        <div className={styles.container}>
            {title && <h3 className={styles.title}>{title}</h3>}
            <div className={styles.chipGrid}>
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className={`${styles.chip} glass`}
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SkillChips;
