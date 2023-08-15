import React from 'react';
import styles from './Page2.module.scss';

import img1 from '../../images/meme.gif';
import img2 from '../../images/leetcode.png';

const Page2 = ( props, {leetcodeContainer, memeContainer, text3, text4} ) => {
  return (
    <div className={styles.page2} >
        <div className={styles.left} ref={memeContainer}>
            <img className={styles.meme} src={img1} alt='meme'></img>
        </div>
        <div className={styles.right}>
            <div className={styles.textContainer} >
                <h2 className={styles.header} ref={text3}>
                    Self-taught Web Developer
                </h2>
                <div className={styles.description} ref={text4}>
                    I started learning Html, Css and Javascript on my own. From there, I dove deeper into frameworks, algorithms and design. I wanted to learn more so I am currently majoring in Software Engineering.
                </div>
            </div>
            <div className={styles.leetcodeContainer} ref={leetcodeContainer}>
                <img className={styles.leetcode}src={img2} alt='leetcode'/>
            </div>
        </div>
    </div>
  )
}

export default React.forwardRef(Page2)