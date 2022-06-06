import React, { ReactElement } from 'react'
import { TextContainer } from 'react-md'

import Layout from '../../../components/admin/Layout'

export default function Users(): ReactElement {
  return (
    <Layout>

      <TextContainer>
        <h1>Admin Users setting!</h1>
      </TextContainer>
    </Layout>
  )
}
