import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Button.module.css';

const Button = ({ children, to, href, onClick, variant = 'primary', className = '' }) => {
    const content = (
        <motion.span
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`${styles.button} ${styles[variant]} ${className}`}
        >
            {children}
        </motion.span>
    );

    if (to) {
        return <Link to={to}>{content}</Link>;
    }

    if (href) {
        return <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>;
    }

    return <button onClick={onClick}>{content}</button>;
};

export default Button;
