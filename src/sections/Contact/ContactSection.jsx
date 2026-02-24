import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
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
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        emailjs.sendForm(
            'service_f41jxtr',
            'template_unb2itf',
            form.current,
            'Y6H8vJp_yidH68A9s'
        ).then(() => {
            setLoading(false);
            setSuccess(true);
            toast.success('Message sent! I will get back to you soon.', {
                duration: 5000,
                icon: '🚀',
            });
            form.current.reset();
            setTimeout(() => setSuccess(false), 5000);
        }, (error) => {
            setLoading(false);
            console.error('EmailJS Error Details:', error);
            toast.error(`Failed to send message: ${error.text || 'Unknown Error'}`);
        });
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
                            ref={form}
                            onSubmit={sendEmail}
                            className={`${styles.form} ${success ? styles.successForm : ''}`}
                        >
                            <div className={styles.inputGroup}>
                                <label htmlFor="user_name">Full Name</label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="from_name"
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
                                    placeholder="example@email.com"
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
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
