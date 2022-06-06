import React, { ReactElement } from 'react'
import { TextContainer } from 'react-md'

import Layout from '../../../components/admin/Layout'

export default function About(): ReactElement {
  return (
    <Layout>

      <TextContainer>
        <h1>About!</h1>
      </TextContainer>
    </Layout>
  )
}
