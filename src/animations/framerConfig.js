export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: staggerChildren || 0.1,
            delayChildren: delayChildren || 0,
        },
    },
});

export const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type: type || 'spring',
            delay: delay || 0,
            duration: duration || 0.6,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
});

export const revealVariant = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1]
        }
    },
};

export const tapEffect = {
    tap: { scale: 0.95 },
    hover: { scale: 1.02, transition: { duration: 0.2 } }
};
