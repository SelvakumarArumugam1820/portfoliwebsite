import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import { fadeIn, staggerContainer } from '../../animations/framerConfig';
import { BsBootstrap } from 'react-icons/bs';

const skills = [
    { name: 'Flutter', level: 80, color: '#00C853' },
    { name: 'ReactJS', level: 60, color: '#FF4081' },
    { name: '.NET', level: 75, color: '#FFD600' },
    { name: 'PostgreSQL', level: 75, color: '#00C853' },
    { name: 'HTML/CSS', level: 85, color: '#FF4081' },
    { name: 'Bootstrap', level: 80, color: '#00C853' },
    { name: 'MySQL', level: 75, color: '#00C853' },
    { name: 'SQL Server', level: 80, color: '#00C853' },
    { name: 'JavaScript', level: 60, color: '#FFD600' },
    { name: 'Git', level: 75, color: '#00C853' },
    { name: 'Azure', level: 70, color: '#FF4081' },
    { name: 'VS Code', level: 80, color: '#FFD600' },
    { name: 'Anti Gravity', level: 75, color: '#00C853' },
    { name: 'Team Collaboration', level: 80, color: '#00C853' },
    { name: 'Responsive Design', level: 80, color: '#00C853' },
    { name: 'ASP.NET MVC', level: 75, color: '#00C853' },
];

const SkillItem = ({ skill, index }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (skill.level / 100) * circumference;

    return (
        <motion.div
            variants={fadeIn('up', 'spring', index * 0.05, 0.75)}
            whileHover={{ scale: 1.05 }}
            className={`${styles.skillCard} glass`}
        >
            <div className={styles.ringContainer}>
                <svg vertical-align="middle" width="100" height="100">
                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="transparent"
                        stroke="rgba(255, 255, 255, 0.05)"
                        strokeWidth="8"
                    />
                    <motion.circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="transparent"
                        stroke={skill.color}
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset: offset }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        strokeLinecap="round"
                    />
                </svg>
                <span className={styles.percentage}>{skill.level}%</span>
            </div>
            <h3 className={styles.skillName}>{skill.name}</h3>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section className="section-container" id="skills">
            <motion.div
                variants={staggerContainer(0.1, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <div className={styles.header}>
                    <h2 className={styles.title}>System <span>Core</span></h2>
                    <p className={styles.subtitle}>My technical stack & proficiency</p>
                </div>

                <div className={styles.grid}>
                    {skills.map((skill, index) => (
                        <SkillItem key={index} skill={skill} index={index} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
