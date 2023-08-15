import React, {useEffect, useRef} from 'react';
import styles from './Navbar.module.scss';
import { gsap, Power4, Power1 } from 'gsap';

const Navbar = () => {
  const title = useRef();
  const titleContainer = useRef();
  const line = useRef();

  useEffect(() => {
    const duration = 0.7;
    const delay = 1.5;

    gsap.timeline()
    .from(titleContainer.current, {
      y: (window.innerHeight/2) - titleContainer.current.offsetHeight,
      duration: duration,
      delay: delay,
      ease: Power1.easeOut
    })
    .from(title.current, {
      fontSize: '8vw',
      duration: duration,
      ease: Power1.easeOut
    }, `-=${duration}`)
    .from(line.current, {
      width: 0,
      duration: 1.5,
      ease: Power4.easeOut     
    });
    
  }, []);

  return (
    <div className={styles.container}>
        <div className={styles.content} ref={titleContainer}>
          <h2 className={styles.name} ref={title}>
            Kevin Chong
          </h2>
          <div className={styles.line} ref={line}></div>
        </div>
    </div>
  )
}

export default Navbar
