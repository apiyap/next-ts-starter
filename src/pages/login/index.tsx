import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'

import LinkStyledButton from "../../components/LinkStyledButton/"
import CompanyCopyright from '../../components/CompanyCopyright'

import { Grid,  } from '@react-md/utils'

import styles from '../../styles/Home.module.css'
import logo from '../../images/logo/matrix-robot-logo-ex.svg'

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}></h1>
        <Head>
          <title>IST Matrix Robot</title>
          <meta name="description" content="Matrix Robot" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Image src={logo} className={styles.logo} alt="Logo" />

        <div className='login'>

        </div>
        <Grid columns={2}>
          <LinkStyledButton href="/home">Home</LinkStyledButton>
          <LinkStyledButton href="/register">Register</LinkStyledButton>
        </Grid>

        <CompanyCopyright/>
      </main>
    </div>
  )
}

export default Login
