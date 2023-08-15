import React, {useEffect, useRef} from 'react';
import styles from './About.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import {animTo, animFrom} from '../../Gsap';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
gsap.registerPlugin(ScrollTrigger);



const About = () => {
    const horizontal = useRef();
    const container = useRef();
    const header = useRef();
    const footer = useRef();

    //Page1
    const text1 = useRef();
    const text2 = useRef();

    //Page2
    const leetcodeContainer = useRef();
    const memeContainer = useRef();
    const text3 = useRef();
    const text4 = useRef();

    //Page3
    const text5 = useRef();
    const letters = useRef([]);

    useEffect(() => {

        ScrollTrigger.matchMedia({
            '(min-width: 721px)' : () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: horizontal.current,
                        start: 'top top',
                        end: `+=${horizontal.current.offsetWidth}`,
                        pin: true,
                        scrub: 2
                    }
                })
                .to(horizontal.current, {
                    x: -(horizontal.current.offsetWidth - window.innerWidth),
                    ease: "none"
                });
                //Page1
                animFrom(text2.current, {opacity: 0}, horizontal.current, 'bottom bottom', '', '', 'play none none reverse');
                animFrom(text1.current, {opacity: 0}, horizontal.current, 'top 40%', '', '', 'play none none reverse');

                 //Page2
                animTo(memeContainer.current, {xPercent: 5}, memeContainer.current, 'right right', 'left left', 1, '', tl);
                animTo(leetcodeContainer.current, {xPercent: 5}, leetcodeContainer.current, 'right right', 'left left', 1, '', tl);
                animTo(text3.current, {xPercent: -23}, text3.current, 'left right', 'left left', 4, '', tl);
                animTo(text4.current, {xPercent: -16}, text4.current, 'left right', 'left left', 4, '', tl);

                //Page3
                animTo(text5.current, {xPercent: -25}, text5.current, 'right right', 'left left', 2, '', tl);
                animTo(letters.current, {color: 'white', stagger: {amount: 1}}, letters.current, 'right 80%', 'right 20%', true, '', tl);
            }
        })

        gsap.to('body',{
            scrollTrigger: {
                trigger: horizontal.current,
                start: 'top 40%',
                onEnter: () => document.querySelector('body').classList.toggle('isActive'),
                onLeaveBack: () => document.querySelector('body').classList.toggle('isActive')
            }
        });
        
        animTo(header.current, {position: 'fixed', top: 0, opacity: 1, duration : 1}, horizontal.current, 'top top', '', '', 'play none none reverse');
        animTo(footer.current, {position: 'fixed', bottom: 0, opacity: 1, duration : 1}, horizontal.current, 'top top', '', '', 'play none none reverse');
        
        
    }, []);

  return (
    <div className={styles.wrapper} ref={container}>  

        <div className={styles.header} ref={header}>
            <div className={styles.headerContent}>
                <p className={styles.text}>Front-End Developer</p>
                <p className={styles.text}>Kevin Chong</p>
                <p className={styles.text}>Web Developer</p>
            </div>
        </div>

        <div className={styles.horizontalContainer} ref={horizontal}>
            <section className={styles.section}>
                <Page1 ref={{text1, text2}}/>
            </section>

            <section className={styles.section}>
                <Page2 ref={{leetcodeContainer, memeContainer, text3, text4}}/>
            </section>

            <section className={styles.section}>
                <Page3 ref={{text5, letters}}/>
            </section>s

            <div className={styles.marqueeContainer}>
                <span className={styles.marquee}>
                  HTML. CSS. JAVASCRIPT. REACT. SASS. GSAP. FRAMER MOTION. REDUX TOOLKIT. NEXT JS. REACT ROUTER. HTML. CSS. JAVASCRIPT. REACT. SASS. GSAP. FRAMER MOTION. REDUX TOOLKIT. NEXT JS. REACT ROUTER. 
                  HTML. CSS. JAVASCRIPT. REACT. SASS. GSAP. FRAMER MOTION. REDUX TOOLKIT. NEXT JS. REACT ROUTER. HTML. CSS. JAVASCRIPT. REACT. SASS. GSAP. FRAMER MOTION. REDUX TOOLKIT. NEXT JS. REACT ROUTER. 
                  HTML. CSS. JAVASCRIPT. REACT. SASS. GSAP. FRAMER MOTION. REDUX TOOLKIT. NEXT JS. REACT ROUTER. HTML. CSS. JAVASCRIPT. REACT. SASS. GSAP. FRAMER MOTION. REDUX TOOLKIT. NEXT JS. REACT ROUTER. 
                </span>
            </div>
        </div>

        <div className={styles.footer} ref={footer}>
            <span className={styles.footerContent}>
                HTML. CSS. JAVASCRIPT. REACT. SASS. GSAP. FRAMER MOTION. REDUX TOOLKIT. NEXT JS. REACT ROUTER. HTML. CSS. JAVASCRIPT. REACT. SASS. GSAP. FRAMER MOTION. REDUX TOOLKIT. NEXT JS. REACT ROUTER. 
                HTML. CSS. JAVASCRIPT. REACT. SASS. GSAP. FRAMER MOTION. REDUX TOOLKIT. NEXT JS. REACT ROUTER. HTML. CSS. JAVASCRIPT. REACT. SASS. GSAP. FRAMER MOTION. REDUX TOOLKIT. NEXT JS. REACT ROUTER. 
                HTML. CSS. JAVASCRIPT. REACT. SASS. GSAP. FRAMER MOTION. REDUX TOOLKIT. NEXT JS. REACT ROUTER. HTML. CSS. JAVASCRIPT. REACT. SASS. GSAP. FRAMER MOTION. REDUX TOOLKIT. NEXT JS. REACT ROUTER. 
            </span>
        </div>
    </div>
  )
}

export default About