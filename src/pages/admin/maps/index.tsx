import React, { ReactElement } from 'react'
import { useState } from "react";
import { TextContainer } from 'react-md'
import styles from '../../../styles/map.module.css'

import Layout from '../../../components/admin/Layout'

export default function Maps(): ReactElement {

  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown(current => !current);
  };

  return (
    <Layout>
      <div className={styles.container}>

        <div className={styles.map}></div>
        <div className={styles.wrap}>
          <button className={styles.button} onClick={handleClick}>MENU</button>
        </div>

        {isShown && (
          <div>
            
          </div>
        )}

        {isShown && <Menu />}


      </div>
    </Layout>

  )
}

function Menu() {
  return (
    <div className={styles.hexagonmenu }>
      
      <div className={styles.hexagonitem}>

        <div className={styles.hexitem}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={styles.hexitem}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <a className={styles.hexcontent}>
          <span className={styles.hexcontentinner}>
            <span className={styles.icon}>
              <i className={styles.fauniversalaccess}></i>
            </span>
            <span className={styles.title}>New Map</span>
          </span>
          <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
              fill="#1e2530"></path>
          </svg>
        </a>

      </div>

      <div className={styles.hexagonitem}>

        <div className={styles.hexitem}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={styles.hexitem}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <a className={styles.hexcontent}>
          <span className={styles.hexcontentinner}>
            <span className={styles.icon}>
              <i className={styles.fauniversalaccess}></i>
            </span>
            <span className={styles.title}>Edit Map</span>
          </span>
          <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
              fill="#1e2530"></path>
          </svg>
        </a>

      </div>

      <div className={styles.hexagonitem}>

<div className={styles.hexitem}>
  <div></div>
  <div></div>
  <div></div>
</div>

<div className={styles.hexitem}>
  <div></div>
  <div></div>
  <div></div>
</div>

<a className={styles.hexcontent}>
  <span className={styles.hexcontentinner}>
    <span className={styles.icon}>
      <i className={styles.fauniversalaccess}></i>
    </span>
    <span className={styles.title}>change Map</span>
  </span>
  <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
      fill="#1e2530"></path>
  </svg>
</a>

</div>

    </div>
  );
}
