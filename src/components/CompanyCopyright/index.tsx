import type { ReactElement } from 'react'


import styles from '../../styles/Home.module.css'


function CompanyCopyright(): ReactElement {
  return (
    <div className={styles.text_center}>
      Copyright © 2020 - 2022{' '}
      <b>
        <a
          href="http://www.interface.co.th"
          target="_blank"
          className="text-black"
          rel="noopener noreferrer"
        >
          Interface Systect Co.,LTD.
        </a>
      </b>
      <br />
      All rights reserved
    </div>
  )
}

export default CompanyCopyright
