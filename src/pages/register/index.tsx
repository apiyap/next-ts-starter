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

            <h4 className={styles.text_center}>สร้างบัญชีผู้ใช้</h4>

          <Form>

          <Grid columns={2}>
          <TextField
                id="firstname-field"
                label="Firstname"
                placeholder="Firstname"
              />

          <TextField
                id="lastname-field"
                label="Lastname"
                placeholder="Lastname"
              />
          </Grid>

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
              <Password className={styles.Divider}
              id="password-confirm-field"
              label="Confirm Password"
              placeholder="Confirm Password">
              </Password>

          </Form>

          <LinkStyledButton href="/login" className={styles.btnregister}>Register</LinkStyledButton>

        </div>
        <Divider></Divider>
        <Grid columns={1}>
          <LinkStyledButton href="/home">Home</LinkStyledButton>
        </Grid>

        <CompanyCopyright/>
        
      </main>
    </div>
  )
}

export default Login
