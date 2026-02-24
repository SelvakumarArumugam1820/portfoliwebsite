import React from 'react';
import { motion } from 'framer-motion';
import styles from './SectionTitle.module.css';

const SectionTitle = ({ title, subtitle, center = false }) => {
    return (
        <div className={`${styles.wrapper} ${center ? styles.center : ''}`}>
            <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={styles.subtitle}
            >
                {subtitle}
            </motion.span>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={styles.title}
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '80px' }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className={styles.line}
            />
        </div>
    );
};

export default SectionTitle;
