import React, { ReactElement } from 'react'
import { TextContainer } from 'react-md'

import Layout from '../../../components/admin/Layout'

export default function Sounds(): ReactElement {
  return (
    <Layout>

      <TextContainer>
        <h1>Admin, Robot sounds setting!</h1>
      </TextContainer>
    </Layout>
  )
}
