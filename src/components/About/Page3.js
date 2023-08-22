import React, {useEffect, useRef} from 'react';
import styles from './Page3.module.scss';
import {AiOutlineLinkedin} from 'react-icons/ai';
import { gsap } from 'gsap';

const Page3 = (props, {text5, letters}) => {
  const cursor = useRef();
  const container = useRef();

  useEffect(() => {
    const cont = container.current;
    const cur = cursor.current;

    

    const move = e => {
      const {clientX, clientY} = e;
      const cursorPos = cur.getBoundingClientRect();
      const {left, top} = cont.getBoundingClientRect();
      
      gsap.to(cursor.current, {
        x: clientX - (left + cursorPos.width/2),
        y: clientY - (top + cursorPos.height/2),
        opacity: 1
      })
    }

    const leave = (e) => {
      
      gsap.to(cursor.current, {
        opacity: 0,    
      });
      
    }

    cont.addEventListener('mousemove', move);
    cont.addEventListener('mouseleave', leave);

    return () => {
      cont.removeEventListener('mousemove', move);
      cont.removeEventListener('mouseleave', leave);
    }
  }, []);

  return (
    <div className={styles.page3} >
        <div className={styles.left} ref={text5}>
          <p className={styles.text}>I started doing Leetcode problems in 2022, but I stopped to focus on building React projects.</p>
        </div>
        <a href="https://www.linkedin.com/in/kevin-chong-ng-49478526a/" target='_blank' rel="noreferrer" className={styles.right} ref={container}>
          <div className={styles.titleContainer}>
            <div className={styles.first}>
              <p className={styles.title} ref={el => letters.current.push(el)}>C</p>
              <p className={styles.title} ref={el => letters.current.push(el)}>o</p>
              <p className={styles.title} ref={el => letters.current.push(el)}>n</p>
              <p className={styles.title} ref={el => letters.current.push(el)}>t</p>
              <p className={styles.title} ref={el => letters.current.push(el)}>a</p>
              <p className={styles.title} ref={el => letters.current.push(el)}>c</p>
              <p className={styles.title} ref={el => letters.current.push(el)}>t</p>
            </div>
            <div className={styles.second}>
              <p className={styles.title} ref={el => letters.current.push(el)}>m</p>
              <p className={styles.title} ref={el => letters.current.push(el)}>e</p>
            </div>
          </div>
          <div className={styles.cursor} ref={cursor}>
            <AiOutlineLinkedin className={styles.icon}/>
          </div>  
        </a>
        
    </div>
  )
}

export default React.forwardRef(Page3)