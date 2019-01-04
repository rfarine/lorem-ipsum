import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { rem } from 'polished'
import Page from '../components/Page'

const Title = styled.h1`
  font-family: 'Helvetica', sans-serif;
  font-size: ${rem('50px')};
`

const IndexPage = ({ isAuthenticated }) => (
  <main>
    <Title>Lorem Ipsum</Title>
    {isAuthenticated && (
      <div>
        Hey I am auth'd.
        <br />
        <Link href="/logout">
          <a>Go logout</a>
        </Link>
      </div>
    )}
    {!isAuthenticated && (
      <div>
        No way. I am not auth'd.
        <br />
        <Link href="/login">
          <a>Go log in</a>
        </Link>
      </div>
    )}
  </main>
)

export default Page(IndexPage)
