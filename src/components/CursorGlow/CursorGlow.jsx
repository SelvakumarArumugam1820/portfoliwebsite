import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './CursorGlow.module.css';

const CursorGlow = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (window.innerWidth <= 1024) return; // Disable on touch devices

        const onMouseMove = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });

            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.4,
                ease: 'power3.out'
            });
        };

        window.addEventListener('mousemove', onMouseMove);

        // Check for interactive elements
        const onMouseEnterItem = () => {
            gsap.to(cursor, { scale: 1.5, opacity: 0.5, duration: 0.3 });
            gsap.to(follower, { scale: 3, opacity: 0.2, duration: 0.3 });
        };

        const onMouseLeaveItem = () => {
            gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
            gsap.to(follower, { scale: 1, opacity: 0.5, duration: 0.3 });
        };

        const items = document.querySelectorAll('a, button, .clickable');
        items.forEach(item => {
            item.addEventListener('mouseenter', onMouseEnterItem);
            item.addEventListener('mouseleave', onMouseLeaveItem);
        });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className={styles.cursor} />
            <div ref={followerRef} className={styles.follower} />
        </>
    );
};

export default CursorGlow;
