import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import styles from './MagneticButton.module.css';

const MagneticButton = ({ children, className = '', ...props }) => {
    const btnRef = useRef(null);

    useEffect(() => {
        const btn = btnRef.current;

        if (window.innerWidth <= 1024) return;

        const onMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = btn.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            gsap.to(btn, {
                x: x * 0.4,
                y: y * 0.4,
                duration: 0.3,
                ease: 'power3.out'
            });
        };

        const onMouseLeave = () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.7,
                ease: 'elastic.out(1, 0.3)'
            });
        };

        btn.addEventListener('mousemove', onMouseMove);
        btn.addEventListener('mouseleave', onMouseLeave);

        return () => {
            btn.removeEventListener('mousemove', onMouseMove);
            btn.removeEventListener('mouseleave', onMouseLeave);
        };
    }, []);

    return (
        <div className={styles.magneticWrapper}>
            <div ref={btnRef} className={`${styles.magneticBtn} ${className}`} {...props}>
                {children}
            </div>
        </div>
    );
};

export default MagneticButton;
