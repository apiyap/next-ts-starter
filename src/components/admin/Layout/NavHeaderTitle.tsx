import React, { ReactElement } from 'react'
import Image from 'next/image'
import logo from '../../../images/logo/matrix-robot-logo-ex.svg'
import styles from '../../../styles/Admin.module.css'

const NavHeaderTitle: ReactElement = (
  <Image src={logo} className={styles.logo} alt="Logo" height={'48px'} />
)

export default NavHeaderTitle
