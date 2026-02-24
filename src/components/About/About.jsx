import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import FeatureCard from './FeatureCard';
import { staggerContainer } from '../../animations/framerConfig';

const features = [
    {
        icon: '📱',
        title: 'Mobile Apps',
        subtitle: 'Flutter Cross-Platform',
        points: ['Fluid high-performance apps', 'Premium UI implementation', 'Deep API integration']
    },
    {
        icon: '⚡',
        title: 'Full Stack',
        subtitle: 'React & .NET',
        points: ['Cinematic React frontends', 'Robust .NET Web APIs', 'PostgreSQL database design']
    },
    {
        icon: '🏢',
        title: 'Business platforms',
        subtitle: 'CRM & Management',
        points: ['StudioMart 2.0 specialized', 'Complex booking systems', 'Stripe payment gateways']
    },
    {
        icon: '📊',
        title: 'Data Science',
        subtitle: 'Predictive Models',
        points: ['Market trend analysis', 'ML-driven insights', 'Data visualization']
    }
];

const About = () => {
    return (
        <section className="section-container" id="about">
            <motion.div
                variants={staggerContainer(0.2, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={styles.grid}
            >
                <div className={styles.intro}>
                    <h2 className={styles.sectionHeader}>Deep expertise in building <span>modern digital ecosystems.</span></h2>
                </div>

                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} index={index} />
                ))}
            </motion.div>
        </section>
    );
};

export default About;
