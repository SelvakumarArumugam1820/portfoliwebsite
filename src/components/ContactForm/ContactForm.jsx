import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import styles from './ContactForm.module.css';
import { fadeIn } from '../../animations/framerConfig';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulating EmailJS with a toast
        const promise = new Promise((resolve) => setTimeout(resolve, 2000));

        toast.promise(promise, {
            loading: 'Sending your transmission...',
            success: 'Message received! Mission successful.',
            error: 'Signal lost. Please try again.',
        });

        await promise;
        setLoading(false);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className={styles.wrapper}>
            <Toaster position="bottom-right" reverseOrder={false} />

            <div className={styles.grid}>
                <motion.div
                    variants={fadeIn('right', 'spring', 0.2, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className={styles.infoSide}
                >
                    <h2 className={styles.title}>Establish <span>Contact</span></h2>
                    <p className={styles.subtitle}>Open for collaborations & inquiries</p>

                    <div className={styles.infoCards}>
                        <div className={`${styles.infoCard} glass`}>
                            <span className={styles.infoIcon}>📧</span>
                            <div>
                                <h4>Email</h4>
                                <p>selvakumararu1820@gmail.com</p>
                            </div>
                        </div>

                        <div className={`${styles.infoCard} glass`}>
                            <span className={styles.infoIcon}>📱</span>
                            <div>
                                <h4>Phone</h4>
                                <p>(+91) 95246 15684</p>
                            </div>
                        </div>

                        <div className={`${styles.infoCard} glass`}>
                            <span className={styles.infoIcon}>🔗</span>
                            <div>
                                <h4>LinkedIn</h4>
                                <p>linkedin.com/in/selvakumar-arumugam2002</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeIn('left', 'spring', 0.4, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className={styles.formSide}
                >
                    <form className={`${styles.form} glass`} onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <label>Full Name</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Email Address</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Message</label>
                            <textarea
                                rows="5"
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Tell me about your project"
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn} disabled={loading}>
                            {loading ? 'Transmitting...' : 'Send Transmission'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactForm;
