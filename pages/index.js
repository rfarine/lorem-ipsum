import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const Title = styled.h1`
  font-family: 'Helvetica', sans-serif;
  font-size: ${rem('50px')};
`

export default () => (
  <main>
    <Title>Lorem Ipsum</Title>
    <section>Hi there.</section>
  </main>
)
