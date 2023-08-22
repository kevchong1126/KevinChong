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
<<<<<<< HEAD
                scrub: 1
=======
                scrub: 4
>>>>>>> 4817f5e401c9232382827a31af89138e18f95283
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