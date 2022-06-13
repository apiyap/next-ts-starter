import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'

import LinkStyledButton from "../../components/LinkStyledButton/"
import CompanyCopyright from '../../components/CompanyCopyright'

import { Grid,  } from '@react-md/utils'

import styles from '../../styles/Home.module.css'
import logo from '../../images/logo/matrix-robot-logo-ex.svg'


import {
  Form,
  TextField,
  Password
} from "@react-md/form";

import { Divider } from 'react-md'

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

          <h4 className={styles.text_center}>ลงชื่อเข้าใช้งาน</h4>

        <Form className={styles.formlogin}>

        <TextField
            id="email-field"
            label="Email or Username"
            placeholder="Email or Username"
          />

            <Divider className={styles.Divider}></Divider>

          <Password
          id="password-field"
          label="Enter Password"
          placeholder="Enter Password">

          </Password>

        </Form>

        <LinkStyledButton href="/admin" className={styles.btnregister}>Login</LinkStyledButton>

        </div>
        <Divider></Divider>
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
