import { motion } from 'framer-motion';
import styles from './Education.module.css';
import { fadeIn, staggerContainer } from '../../animations/framerConfig';

const educationData = [
    {
        degree: "Master of Computer Applications (MCA)",
        school: "Dhanalakshmi Srinivasan Engineering College, Perambalur",
        period: "2023 – 2025",
        grade: "CGPA: 8.1",
        icon: "🎓"
    },
    {
        degree: "Bachelor of Computer Applications (BCA)",
        school: "National College, Tiruchirappalli",
        period: "2020 – 2023",
        grade: "CGPA: 7.8",
        icon: "📜"
    },
    {
        degree: "HSC & SSLC",
        school: "Theakesar Alai Higher Secondary School",
        period: "Manapparai, Trichy",
        grade: "",
        icon: "🏫"
    }
];

const Education = () => {
    return (
        <section className={`${styles.education} education alternate-bg`} id="education">
            <div className="section-container">
                <motion.div
                    variants={fadeIn('right', 'spring', 0.2, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <p className={styles.preTitle}>Academic Background</p>
                    <h2 className={styles.title}>Education <span>History.</span></h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer(0.1, 0)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className={styles.grid}
                >
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn('up', 'spring', index * 0.1, 1)}
                            className={styles.card}
                        >
                            <div className={styles.cardHeader}>
                                <span className={styles.icon}>{edu.icon}</span>
                                <div className={styles.mainInfo}>
                                    <h3>{edu.degree}</h3>
                                    <p className={styles.school}>{edu.school}</p>
                                </div>
                            </div>
                            <div className={styles.details}>
                                <span className={styles.period}>🗓️ {edu.period}</span>
                                {edu.grade && <span className={styles.grade}>{edu.grade}</span>}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section >
    );
};


export default Education;
