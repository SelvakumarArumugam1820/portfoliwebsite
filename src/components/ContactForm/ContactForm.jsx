import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import styles from './ContactForm.module.css';
import { fadeIn } from '../../animations/framerConfig';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState("");

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResult("");

        const trimmedData = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim()
        };

        if (!trimmedData.name || !trimmedData.email || !trimmedData.message) {
            toast.error("Please fill in all fields.");
            setLoading(false);
            return;
        }

        if (!validateEmail(trimmedData.email)) {
            toast.error("Please enter a valid email address.");
            setLoading(false);
            return;
        }

        const submitFormData = new FormData();
        submitFormData.append("access_key", "b467c9ab-6830-4eae-b869-021eaddea78e");
        submitFormData.append("email", trimmedData.email);
        submitFormData.append("message", trimmedData.message);
        submitFormData.append("subject", "New Portfolio Message");
        submitFormData.append("from_name", "Portfolio Contact Form");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: submitFormData
            });

            const data = await response.json();
            console.log("Web3Forms Response:", data);

            if (data.success) {
                setResult("success");
                toast.success("Message received! Mission successful.");
                setFormData({ name: '', email: '', message: '' });
            } else {
                setResult("error");
                toast.error(data.message || "Failed to send message.");
            }
        } catch (error) {
            console.error("Fetch Error:", error);
            setResult("error");
            toast.error("Connection error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.wrapper}>
            <Toaster position="bottom-right" />

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
                                name="name"
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
                                name="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Tell me about your project"
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn} disabled={loading}>
                            {loading ? 'Sending...' : 'Send Transmission'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactForm;