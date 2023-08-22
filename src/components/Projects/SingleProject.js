import React, {useEffect, useRef} from 'react';
import styles from './SingleProject.module.scss';
import { gsap, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const reveal = (ref) => {
    gsap.to(ref, {
        '--x' : '100%',
        duration: 0.3,
        ease: Power4.easeInOut,
        scrollTrigger: {
            trigger: ref,
            start: 'top 95%',
            toggleActions: 'play none none reverse'
        }
    })
}
const SingleProject = ({numberProps, titleProps, descriptionProps, imgProps, mobile, technologyProps, demo, github}) => {
    const imgContainer = useRef();
    const number = useRef();
    const title = useRef();
    const description = useRef();
    const btn1 = useRef();
    const btn2 = useRef();
    const technologies = useRef([]);
    const mobileContainer = useRef();

    useEffect(() => {
        gsap.from(imgContainer.current, {
            yPercent: 20,
            scrollTrigger: {
                trigger: imgContainer.current,
                start: 'top bottom',
                end: 'top 20%',
                scrub: 2
            }
        });
        
        gsap.to(mobileContainer.current, {
            yPercent: -35,
            scrollTrigger: {
                trigger: mobileContainer.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 4
            }
        })
        technologies.current.forEach(el => {
            reveal(el);
        });
        reveal(number.current);
        reveal(title.current);
        reveal(description.current);
        reveal(btn1.current);
        reveal(btn2.current);
    }, []);

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.left}>
                <div className={styles.leftContainer}>
                    <div className={styles.pageNumber}>
                        <p className={styles.number} ref={number}>{numberProps}</p>
                    </div>
                    <div className={styles.titleContainer}>
                        <h2 className={styles.title} ref={title}>{titleProps}</h2>
                    </div>
                    <div className={styles.technologiesContainer}>
                        {
                            technologyProps.map((el, i) => <h3 className={styles.technology} ref={ref => technologies.current.push(ref)} key={i} >{el}</h3>) 
                        }
                    </div>
                    <div className={styles.descriptionContainer}>
                        <p className={styles.description} ref={description}>
                            {descriptionProps}
                        </p>
                    </div>
                    <div className={styles.btnContainer}>
                        <a className={styles.btn} href={demo} ref={btn1} target='_blank'  rel="noreferrer">Demo →</a>
                        <a className={styles.btn} href={github} ref={btn2} target='_blank'  rel="noreferrer">Code →</a>
                    </div>
                </div>
            </div>  
            <div className={styles.right}>
                <div className={styles.imgContainer} ref={imgContainer}>
                    <img src={imgProps} alt={titleProps} />
                </div>
                {
                    mobile 
                    && 
                    <div className={styles.mobileContainer} ref={mobileContainer}> <img src={mobile} alt={titleProps} className={styles.mobile}/> </div>
                }
            </div>
        </div>
    </div>
  )
}

export default SingleProject