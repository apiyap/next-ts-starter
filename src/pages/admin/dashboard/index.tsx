import React, { ReactElement } from 'react'
import { TextContainer } from 'react-md'

import Layout from '../../../components/admin/Layout'

export default function Dashboard(): ReactElement {
  return (
    <Layout>

      <TextContainer>
        <h1>Admin, Dashboard!</h1>
      </TextContainer>
    </Layout>
  )
}
