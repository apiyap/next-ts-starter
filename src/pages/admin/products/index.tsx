import React, { ReactElement } from 'react'
import { TextContainer } from 'react-md'

import Layout from '../../../components/admin/Layout'

export default function Products(): ReactElement {
  return (
    <Layout>

      <TextContainer>
        <h1>Admin, Products!</h1>
      </TextContainer>
    </Layout>
  )
}
