import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import styles from './Intro.module.scss';

const Intro = () => {

    return (
        <section className={styles.section}>
            <Navbar />
            <Hero />
        </section>
            
    )
}

export default Intro