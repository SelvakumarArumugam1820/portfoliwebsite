import { useState, useEffect } from 'react';

const useTypewriter = (config) => {
    // Handle both array and object inputs
    const isObject = !Array.isArray(config);
    const words = isObject ? config.words : config;
    const typingSpeed = isObject ? (config.typeSpeed || 150) : 150;
    const erasingSpeed = isObject ? (config.deleteSpeed || 100) : 100;
    const delayBetweenWords = isObject ? (config.delaySpeed || 2000) : 2000;

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    // Typing logic
    useEffect(() => {
        if (!words || words.length === 0) return;
        if (index >= words.length) {
            setIndex(0);
            return;
        }

        const currentWord = words[index];
        if (!currentWord) return;

        if (subIndex === currentWord.length + 1 && !isDeleting) {
            setTimeout(() => setIsDeleting(true), delayBetweenWords);
            return;
        }

        if (subIndex === 0 && isDeleting) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, isDeleting ? erasingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, isDeleting, words, typingSpeed, erasingSpeed, delayBetweenWords]);

    const displayText = words && words[index]
        ? `${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`
        : '';

    // Return as array to support typingText[0] usage if needed, or just string
    return [displayText];
};

export default useTypewriter;

