import React, { ReactElement } from 'react'
import { TextContainer } from 'react-md'

import Layout from '../../../components/admin/Layout'

export default function Robot(): ReactElement {
  return (
    <Layout>

      <TextContainer>
        <h1>Admin, Robot setting!</h1>
      </TextContainer>
    </Layout>
  )
}
