import React, { ReactElement } from 'react'
import { TextContainer } from 'react-md'
import { Typography } from "@react-md/typography";

import { Grid } from '@react-md/utils'

import Layout from '../../../components/admin/Layout'
import styles from '../../../styles/dashboard.module.css'
import LinkStyledButton from "../../../components/LinkStyledButton/"

export default function Dashboard(): ReactElement {
  return (
    <Layout>
      <TextContainer>
        <div className={styles.container}>

          <div className={styles.headercontainer}>

            <div className={styles.headertext}>Dashboard Control</div>

          </div>

          <div className={styles.option}>

            <div className={styles.optiontext}>Map name : </div>
            <div className={styles.optiontext}>Type : </div>
            <div className={styles.optiontext}>Status : </div>
            <div className={styles.optiontext}>Sort by : </div>

          </div>

          <div className={styles.bodycontainer}>

            <div className={styles.mapcontainer}>
              <div className={styles.map}></div>
            </div>

            <div className={styles.shoctcut}>

              <Grid columns={3}>

                <button className={styles.btn}>
                  <span className={styles.btncontent}>Move to standy point_</span>
                  <span className={styles.btnlabel}>interface</span>
                </button>
                <button className={styles.btn}>
                  <span className={styles.btncontent}>Move to standy point_</span>
                  <span className={styles.btnlabel}>interface</span>
                </button>
                <button className={styles.btn}>
                  <span className={styles.btncontent}>Move to standy point_</span>
                  <span className={styles.btnlabel}>interface</span>
                </button>
                <button className={styles.btn}>
                  <span className={styles.btncontent}>Move to standy point_</span>
                  <span className={styles.btnlabel}>interface</span>
                </button>
                <button className={styles.btn}>
                  <span className={styles.btncontent}>Move to standy point_</span>
                  <span className={styles.btnlabel}>interface</span>
                </button>
                <button className={styles.btn}>
                  <span className={styles.btncontent}>Move to standy point_</span>
                  <span className={styles.btnlabel}>interface</span>
                </button>
                <button className={styles.btn}>
                  <span className={styles.btncontent}>Move to standy point_</span>
                  <span className={styles.btnlabel}>interface</span>
                </button>
                <button className={styles.btn}>
                  <span className={styles.btncontent}>Move to standy point_</span>
                  <span className={styles.btnlabel}>interface</span>
                </button>
                <button className={styles.btn}>
                  <span className={styles.btncontent}>Move to standy point_</span>
                  <span className={styles.btnlabel}>interface</span>
                </button>
                <button className={styles.btn}>
                  <span className={styles.btncontent}>Move to standy point_</span>
                  <span className={styles.btnlabel}>interface</span>
                </button>
                <button className={styles.btn}>
                  <span className={styles.btncontent}>Move to standy point_</span>
                  <span className={styles.btnlabel}>interface</span>
                </button>
                <button className={styles.btn}>
                  <span className={styles.btncontent}>Move to standy point_</span>
                  <span className={styles.btnlabel}>interface</span>
                </button>
                <button className={styles.btn}>
                  <span className={styles.btncontent}>Move to standy point_</span>
                  <span className={styles.btnlabel}>interface</span>
                </button>
                <button className={styles.btn}>
                  <span className={styles.btncontent}>Move to standy point_</span>
                  <span className={styles.btnlabel}>interface</span>
                </button>
                <button className={styles.btn}>
                  <span className={styles.btncontent}>Move to standy point_</span>
                  <span className={styles.btnlabel}>interface</span>
                </button>
                <button className={styles.btn}>
                  <span className={styles.btncontent}>Move to standy point_</span>
                  <span className={styles.btnlabel}>interface</span>
                </button>
                <button className={styles.btn}>
                  <span className={styles.btncontent}>Move to standy point_</span>
                  <span className={styles.btnlabel}>interface</span>
                </button>
                <button className={styles.btn}>
                  <span className={styles.btncontent}>Move to standy point_</span>
                  <span className={styles.btnlabel}>interface</span>
                </button>
                <button className={styles.btn}>
                  <span className={styles.btncontent}>Move to standy point_</span>
                  <span className={styles.btnlabel}>interface</span>
                </button>
                <button className={styles.btn}>
                  <span className={styles.btncontent}>Move to standy point_</span>
                  <span className={styles.btnlabel}>interface</span>
                </button>



              </Grid>

            </div>

            <div className={styles.detail}>

              <div className={styles.headdetail}>

                <div className={styles.commandanme}>
                  Command Device
                </div>

                <div className={styles.statuscommand}>
                  Status : On Process...
                </div>

              </div>

              <div className={styles.bodydetail}>

                <div className={styles.camera}></div>

                <Typography type="headline-6" className={styles.descrition}>
                  Shortcut Command
                </Typography>
                
                <Typography type="body-2" className={styles.descrition}>
                  Body 2: Cras condimentum facilisis augue vel porta. Proin eget aliquam
                  libero. Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, perss inceptos himenaeos.
                </Typography>

              </div>

              <div className={styles.footerdetail}>

                <Grid columns={2}>
                  <LinkStyledButton href="/admin" className={styles.btn_activate}>Activate</LinkStyledButton>
                  <LinkStyledButton href="/admin" className={styles.btn_cancel}>Cancel</LinkStyledButton>
                </Grid>

              </div>

            </div>

          </div>

        </div>
      </TextContainer>
    </Layout>
  )
}
