import React from 'react'

import { Layout, Title, Subtitle } from './styles'

const PageTitle = ({ title, subtitle }) => (
  <Layout>
    <Title>{title}</Title>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
  </Layout>
)

export default PageTitle
