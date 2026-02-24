import React from 'react';
import styles from './BackgroundMesh.module.css';

const BackgroundMesh = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.mesh} />
            <div className={`${styles.blob} ${styles.blob1}`} />
            <div className={`${styles.blob} ${styles.blob2}`} />
            <div className={`${styles.blob} ${styles.blob3}`} />
            <div className={styles.overlay} />
        </div>
    );
};

export default BackgroundMesh;
