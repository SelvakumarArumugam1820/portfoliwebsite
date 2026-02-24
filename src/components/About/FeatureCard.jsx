import React from 'react';
import { motion } from 'framer-motion';
import styles from './FeatureCard.module.css';
import { fadeIn } from '../../animations/framerConfig';

const FeatureCard = ({ icon, title, subtitle, points, index }) => {
    return (
        <motion.div
            variants={fadeIn('up', 'spring', index * 0.1, 1)}
            whileHover={{ y: -10 }}
            className={`${styles.card} glass`}
        >
            <div className={styles.iconWrapper}>
                <span className={styles.icon}>{icon}</span>
                <div className={styles.glow}></div>
            </div>

            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subtitle}>{subtitle}</p>

            <ul className={styles.points}>
                {points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>

            <div className={styles.borderGlow}></div>
        </motion.div>
    );
};

export default FeatureCard;
