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

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            'service_f41jxtr',
            'template_unb2itf',
            form.current,
            'Y6H8vJp_yidH68A9s'
        ).then(() => {
            setLoading(false);
            toast.success('Message sent successfully!');
            form.current.reset();
        }, (error) => {
            setLoading(false);
            console.log(error.text);
            toast.error('Failed to send message.');
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
                            <ContactItem icon="✉️" label="Email" value="selvakumararumugam2002@gmail.com" link="mailto:selvakumararumugam2002@gmail.com" />
                            <ContactItem icon="📞" label="Phone" value="+91 8807849884" link="tel:+918807849884" />
                            <ContactItem icon="📍" label="Location" value="Coimbatore, Tamil Nadu" />
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeIn('left', 'spring', 0.4, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className={styles.formSide}
                    >
                        <form ref={form} onSubmit={sendEmail} className={styles.form}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="user_name">Full Name</label>
                                <input type="text" id="user_name" name="user_name" placeholder="Selvakumar Arumugam" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="user_email">Email Address</label>
                                <input type="email" id="user_email" name="user_email" placeholder="example@email.com" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="6" placeholder="Your Message..." required></textarea>
                            </div>
                            <button type="submit" disabled={loading} className={styles.submitBtn}>
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
