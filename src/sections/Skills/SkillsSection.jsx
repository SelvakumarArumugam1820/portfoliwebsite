import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import { skillsData } from '../../data/skillsData';
import { fadeIn, staggerContainer } from '../../animations/framerConfig';

const SkillItem = ({ name, level }) => (
    <div className={styles.skillItem}>
        <div className={styles.skillHeader}>
            <span className={styles.skillName}>{name}</span>
            <span className={styles.skillPercentage}>{level}%</span>
        </div>
        <div className={styles.progressBg}>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className={styles.progressFill}
            />
        </div>
    </div>
);

const SkillsSection = () => {
    // Group skills by category
    const categories = skillsData.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {});

    return (
        <section className={`${styles.skills} skills alternate-bg`} id="skills">
            <div className="section-container">
                <motion.div
                    variants={fadeIn('up', 'spring', 0.2, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <p className={styles.preTitle}>Technical Stack</p>
                    <h2 className={styles.title}>Technologies I <span>Master.</span></h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer(0.1, 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className={styles.skillsGrid}
                >
                    {Object.keys(categories).map((category, idx) => (
                        <motion.div
                            key={category}
                            variants={fadeIn('up', 'spring', idx * 0.1, 1)}
                            className={styles.skillCard}
                        >
                            <h3 className={styles.categoryTitle}>{category}</h3>
                            <div className={styles.skillsList}>
                                {categories[category].map((skill, i) => (
                                    <SkillItem key={i} name={skill.name} level={skill.level} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
