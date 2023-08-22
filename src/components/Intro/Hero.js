import React, {useEffect, useRef} from 'react';
import styles from './Hero.module.scss';
import {BsLinkedin} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
import { ScrollTrigger } from 'gsap/all';
import { gsap, Power4 } from 'gsap';
gsap.registerPlugin(ScrollTrigger);

const fadeUp = (ref, scroll) => {
  gsap.to(ref, {
    
    opacity: 0,
    scrollTrigger:{
      trigger: ref,
      start: '-25% 30%',
      end: 'top 30%',
      scrub: 2
    }
  })
}

const animate = (ref, add) => {
  gsap.from(ref, {
    opacity: 0, 
    duration: 1, 
    delay:1.2+add,
    ease: Power4.easeOut
  });
}
const Hero = () => {
  const left = useRef();
  const title1 = useRef();
  const title2 = useRef();
  const quote = useRef();
  const right = useRef();
  const right1 = useRef();
  const right2 = useRef();
  const leftContainer = useRef();

  useEffect(() => {
    const delay = 1.5;

    fadeUp(title1.current,50);
    fadeUp(title2.current,45);
    fadeUp(quote.current,45);
    fadeUp(leftContainer.current,35);
    fadeUp(right1.current,55);
    fadeUp(right2.current,45);
    
    gsap.timeline()
    .from(title1.current, {yPercent: 100, opacity: 0, duration: 1, delay: delay, ease: Power4})
    .from(title2.current, {yPercent: 100, opacity: 0, duration: 1, delay: -0.8, ease: Power4});

    animate(left.current, 1.2);
    animate(quote.current, 1.2);
    animate(right.current, 1.2);
  }, []);

  return (
    <div className={styles.container}>
        <div className={styles.content}>

            <div className={styles.left} ref={leftContainer}>
              <p className={styles.info} ref={left}>
                Custom website made with React.
              </p>
            </div>

            <div className={styles.center}>
                <div className={styles.titleContainer}>
                <h1 className={styles.title} ref={title1}>Front-End</h1>
                </div>
                <div className={styles.titleContainer}>
                  <h1 className={styles.title} ref={title2}>Developer</h1>
                </div>
                <div ref={quote}>
                  <p className={styles.quote} >"Developing the future, a website at a time."</p>
                </div>
                
            </div>

            <div className={styles.right}>
              <ul className={styles.socialContainer} ref={right}>
                  <li className={styles.socialIcon} ref={right1}>
                    <a href='https://www.linkedin.com/in/kevin-chong-ng-49478526a/' target='_blank' rel="noreferrer"> <BsLinkedin className={styles.icon}/> </a>
                  </li>
                  <li className={styles.socialIcon} ref={right2}>
                    <a href='https://github.com/kevchong1126' target='_blank' rel="noreferrer"> <AiFillGithub className={styles.icon}/> </a>
                  </li>
              </ul>
            </div>
        
        </div>
    </div>
  )
}

export default Hero