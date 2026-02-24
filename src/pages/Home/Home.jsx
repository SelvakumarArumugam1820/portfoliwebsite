import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Timeline from '../../components/Timeline/Timeline';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Timeline />
                <section className="section-container" id="contact">
                    <ContactForm />
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;
