import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { HiArrowNarrowUp } from 'react-icons/hi';
import styles from './ScrollToTop.module.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const toggleVisibility = () => setIsVisible(window.scrollY > 300);
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Global Progress Bar at Top */}
            <motion.div className={styles.topProgress} style={{ scaleX }} />

            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                        className={styles.scrollBtn}
                    >
                        <div className={styles.inner}>
                            <HiArrowNarrowUp />
                        </div>
                        {/* Circular Progress */}
                        <svg className={styles.progressCircle} viewBox="0 0 100 100">
                            <motion.circle
                                cx="50"
                                cy="50"
                                r="45"
                                pathLength="1"
                                className={styles.path}
                                style={{ pathLength: scrollYProgress }}
                            />
                        </svg>
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
};

export default ScrollToTop;
