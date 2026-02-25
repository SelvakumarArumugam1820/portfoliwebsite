import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import styles from './Contact.module.css';
import { fadeIn } from '../../animations/framerConfig';

const ContactItem = ({ icon, label, value, link }) => (
    <div className={styles.contactItem}>
        <div className={styles.iconWrapper}>{icon}</div>
        <div className={styles.info}>
            <label>{label}</label>
            {link ? (
                <a href={link} target="_blank" rel="noreferrer">{value}</a>
            ) : (
                <p>{value}</p>
            )}
        </div>
    </div>
);

const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        const formDataToSubmit = new FormData();
        formDataToSubmit.append("access_key", "b467c9ab-6830-4eae-b869-021eaddea78e");
        formDataToSubmit.append("name", formData.from_name);
        formDataToSubmit.append("email", formData.from_email);
        formDataToSubmit.append("message", formData.message);
        formDataToSubmit.append("subject", "New Portfolio Message");
        formDataToSubmit.append("from_name", "Portfolio Contact Form");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSubmit
            });

            const data = await response.json();

            if (data.success) {
                setLoading(false);
                setSuccess(true);
                toast.success('Message sent! I will get back to you soon.', {
                    duration: 5000,
                    icon: '🚀',
                });
                setFormData({ from_name: '', from_email: '', message: '' });
                setTimeout(() => setSuccess(false), 5000);
            } else {
                setLoading(false);
                console.warn("Web3Forms Submission Failed:", data);
                toast.error(`System Error: ${data.message || 'Submission rejected'}`);
            }
        } catch (error) {
            setLoading(false);
            console.error("Network/CORS Error during submission:", error);
            toast.error("Signal lost. Check your connection or check console for details.");
        }
    };



    return (
        <section className={`${styles.contact} contact alternate-bg`} id="contact">
            <Toaster position="bottom-right" />
            <div className="section-container">
                <div className={styles.mainGrid}>
                    <motion.div
                        variants={fadeIn('right', 'spring', 0.2, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className={styles.infoSide}
                    >
                        <p className={styles.preTitle}>Get in Touch</p>
                        <h2 className={styles.title}>Let's discuss <br /><span>your next project.</span></h2>
                        <p className={styles.paragraph}>
                            I am currently open to new opportunities and collaborations.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className={styles.contactDetails}>
                            <ContactItem icon="✉️" label="Email" value="selvakumararu1820@gmail.com" link="mailto:selvakumararu1820@gmail.com" />
                            <ContactItem icon="📞" label="Phone" value="(+91) 95246 15684" link="tel:(+91) 95246 15684" />
                            <ContactItem icon="📍" label="Location" value="Tiruchirappalli, Tamil Nadu" />
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeIn('left', 'spring', 0.4, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className={styles.formSide}
                    >
                        <form
                            onSubmit={sendEmail}
                            className={`${styles.form} ${success ? styles.successForm : ''}`}
                        >
                            <div className={styles.inputGroup}>
                                <label htmlFor="user_name">Full Name</label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="from_name"
                                    value={formData.from_name}
                                    onChange={handleChange}
                                    placeholder="ex: Selvakumar Arumugam"
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="user_email">Email Address</label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="from_email"
                                    value={formData.from_email}
                                    onChange={handleChange}
                                    placeholder="example@email.com"
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Your Message..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`${styles.submitBtn} ${loading ? styles.loading : ''}`}
                            >
                                {loading ? (
                                    <span className={styles.btnContent}>
                                        <span className={styles.spinner}></span> Sending...
                                    </span>
                                ) : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
