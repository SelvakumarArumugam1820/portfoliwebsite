import React from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projectsData } from '../../data/projectsData';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Projects = () => {
    return (
        <>
            <Navbar />
            <div className={styles.page}>
                <section className="section-container">
                    <div className={styles.header}>
                        <h1 className={styles.title}>Selected <span>Operations</span></h1>
                        <p className={styles.subtitle}>Case studies of scalable solutions</p>
                    </div>

                    <div className={styles.grid}>
                        {projectsData?.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Projects;
