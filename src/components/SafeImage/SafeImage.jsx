import React, { useState } from 'react';
import styles from './SafeImage.module.css';

const SafeImage = ({ src, alt, className }) => {
    const [error, setError] = useState(false);

    if (error || !src) {
        return (
            <div className={`${styles.fallback} ${className}`}>
                <span className={styles.icon}>👤</span>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={() => setError(true)}
        />
    );
};

export default SafeImage;
