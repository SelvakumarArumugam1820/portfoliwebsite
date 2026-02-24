import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className={styles.page}>
                <section className="section-container">
                    <ContactForm />
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
