import type { NextPage } from 'next'
import type { ReactElement } from 'react'

import Image from 'next/image'
import Head from 'next/head'
import { Avatar } from '@react-md/avatar'
import scssVariables from '@react-md/avatar/dist/scssVariables'
import { List, ListItem } from '@react-md/list'
import { Link } from '@react-md/link'
// import { Divider } from '@react-md/divider'
import { Grid } from '@react-md/utils'

// import people from '../lib/people'
import color_styles from './ColorExamples.module.scss'
// import grid_styles from './Grid.module.scss'

import LinkStyledButton from '../../components/LinkStyledButton/'
import CompanyCopyright from '../../components/CompanyCopyright'

import styles from '../../styles/Home.module.css'
import logo from '../../images/logo/matrix-robot-logo-ex.svg'

const COLORS = Object.keys(scssVariables['rmd-avatar-colors'])

const people = [
  'Jasmine Robinson',
  'Devonte Craig',
  'Dean Reid',
  'Shaquille Bauer',
  'Vivian Bishop',
  'Braden Mullins',
  'Katlyn Mcdonald',
  'Isabella Marshall',
  'Lee Christensen',
  'Tommy Hogan',
  'Timothy Harvey',
  'Preston Phillips',
  'Marco Sherman',
  'Haley Coleman',
  'Mario Swanson',
  'Xavier Solis',
  'Keaton Cannon',
] as const

const transformedPeople = people.map((name, i) => ({
  id: name.toLowerCase().replace(/ /g, '-'),
  name,
  avatar: name.substring(0, 1),
  color: COLORS[i % COLORS.length],
}))

const Home: NextPage = () => {
  const userClickHandle = (e: any) => {
    console.log(e)
    //
    //window.
  }

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

        <List className={color_styles.list}>
          {transformedPeople.map(({ id, name, avatar, color }, i) => (
            <Link href="/admin" key={`person-${i}`}>
              <ListItem
                id={`person-${i}`}
                key={id}
                leftAddon={<Avatar color={color}>{avatar}</Avatar>}
                leftAddonType="avatar"
                onClick={userClickHandle}
              >
                {name}
              </ListItem>
            </Link>
          ))}
        </List>

        <Grid columns={2}>
          <LinkStyledButton href="/login">Login</LinkStyledButton>
          <LinkStyledButton href="/register">Register</LinkStyledButton>
        </Grid>
        <CompanyCopyright />
      </main>
    </div>
  )
}

export default Home
