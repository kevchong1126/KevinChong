import React from 'react'
import styles from './Page1.module.scss';

const Page1 = (props, {text1, text2}) => {

  return (
    <div className={styles.page1}>
        <div className={styles.top} ref={text1}>
            <p className={styles.text}>Check more</p>
            <p className={styles.text}>Projects on my <a className={styles.link} href="https://github.com/kevchong1126" target='_blank' rel="noreferrer">Github</a>.</p>
        </div>
        <div className={styles.bottom} ref={text2}>
          <p className={styles.text}>A little bit</p>
            <p className={styles.text}>about me <span className={styles.arrow}>→</span></p>
        </div>
    </div>
  )
}

export default React.forwardRef(Page1)