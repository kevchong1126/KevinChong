import React, {useEffect, useRef} from 'react';
import styles from './Header.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const title = useRef();

    useEffect(() => {
        gsap.from(title.current, {
            fontSize: '50vw',
            xPercent: -50,
            scrollTrigger: {
                trigger: title.current,
                start: 'top top',
                end: `+=${title.current.offsetHeight}}`,
                pin: true,
                pinSpacing: false,
                scrub: 1
            }
        })
    }, []);

  return (
    <div className={styles.container}>
        <h1 ref={title}>WORK</h1>
    </div>
  )
}

export default Header