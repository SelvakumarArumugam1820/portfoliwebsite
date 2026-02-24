import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Internship', href: '#internship' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['home', 'about', 'skills', 'experience', 'projects', 'internship', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home', id: 'home' },
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Experience', href: '#experience', id: 'experience' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Internship', href: '#internship', id: 'internship' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.signature}>Selvakumar</div>

                <div className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className={styles.socials}>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
                        LinkedIn
                    </a>
                </div>
            </div>
        </nav>
    );
};



export default Navbar;
