import React, { ReactElement } from 'react'
import { TextContainer } from 'react-md'

import Layout from '../../../components/admin/Layout'

export default function Location(): ReactElement {
  return (
    <Layout>

      <TextContainer>
        <h1>Admin, Robot location setting!</h1>
      </TextContainer>
    </Layout>
  )
}
