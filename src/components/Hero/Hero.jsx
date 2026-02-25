import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import profileImg from '../../assets/profile.png';
import useTypewriter from '../../hooks/useTypewriter';
import { fadeIn, staggerContainer } from '../../animations/framerConfig';


const Stats = () => (
    <motion.div
        variants={staggerContainer(0.2, 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={styles.statsRow}
    >
        <motion.div variants={fadeIn('up', 'spring', 0.1, 0.8)} className={styles.statItem}>
            <h3>1+</h3>
            <p>Years Experience</p>
        </motion.div>
        <motion.div variants={fadeIn('up', 'spring', 0.2, 0.8)} className={styles.statItem}>
            <h3>4+</h3>
            <p>Projects</p>
        </motion.div>
        <motion.div variants={fadeIn('up', 'spring', 0.3, 0.8)} className={styles.statItem}>
            <h3>2+</h3>
            <p>Domains</p>
        </motion.div>
    </motion.div>
);

const Hero = () => {
    return (
        <section className={`${styles.hero} home`} id="home">
            <div className={styles.container}>
                <div className={styles.content}>
                    <motion.div
                        variants={fadeIn('right', 'spring', 0.2, 1)}
                        initial="hidden"
                        animate="show"
                        className={styles.greeting}
                    >
                        Hello, I'm Selvakumar <motion.span
                            animate={{ rotate: [0, 50, 0] }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                            style={{ display: 'inline-block', transformOrigin: '70% 80%' }}
                        >👋</motion.span>
                    </motion.div>

                    <motion.h1
                        variants={fadeIn('right', 'spring', 0.3, 1)}
                        initial="hidden"
                        animate="show"
                        className={styles.headerTitle}
                    >
                        Building Scalable <br />
                        Apps with <span className={styles.accent}>Flutter.</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeIn('right', 'spring', 0.35, 1)}
                        initial="hidden"
                        animate="show"
                        className={styles.techStackTag}
                    >
                        Flutter • .NET Web API • PostgreSQL
                    </motion.p>

                    <motion.p
                        variants={fadeIn('right', 'spring', 0.4, 1)}
                        initial="hidden"
                        animate="show"
                        className={styles.about}
                    >
                        I'm a Flutter-focused Mobile App Developer with one year of professional experience building scalable, high-performance mobile applications and full-stack solutions. I specialize in clean architecture, API integration, and delivering reliable user-centered experiences.
                    </motion.p>

                    <motion.div
                        variants={fadeIn('up', 'spring', 0.5, 1)}
                        initial="hidden"
                        animate="show"
                        className={styles.ctaGroup}
                    >
                        <a href="#contact" className={styles.primaryBtn}>Let's Talk</a>
                        <a href="#projects" className={styles.secondaryBtn}>View Projects</a>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer(0.2, 0.6)}
                        initial="hidden"
                        animate="show"
                        className={styles.statsGrid}
                    >
                        <motion.div variants={fadeIn('up', 'spring', 0, 0.8)} className={styles.statItem}>
                            <h3>1+</h3>
                            <p>Years Experience</p>
                        </motion.div>
                        <motion.div variants={fadeIn('up', 'spring', 0, 0.8)} className={styles.statItem}>
                            <h3>10+</h3>
                            <p>Projects Finished</p>
                        </motion.div>
                        <motion.div variants={fadeIn('up', 'spring', 0, 0.8)} className={styles.statItem}>
                            <h3>5+</h3>
                            <p>Happy Clients</p>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    variants={fadeIn('left', 'spring', 0.5, 1)}
                    initial="hidden"
                    animate="show"
                    className={styles.portraitArea}
                >
                    <div className={styles.profileCard}>
                        <div className={styles.imageWrapper}>
                            <img
                                src={profileImg}
                                alt="Selvakumar Arumugam"
                                className={styles.profileImg}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};



export default Hero;
