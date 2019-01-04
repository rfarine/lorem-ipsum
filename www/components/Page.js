import React from 'react'
import Head from 'next/head'
import Router from 'next/router'

import { getUserFromServerCookie, getUserFromLocalCookie } from '../utils/auth'

export default Page =>
  class DefaultPage extends React.Component {
    static getInitialProps(ctx) {
      const user = process.browser
        ? getUserFromLocalCookie()
        : getUserFromServerCookie(ctx.req)
      const pageProps = Page.getInitialProps && Page.getInitialProps(ctx)
      return {
        ...pageProps,
        user,
        currentUrl: ctx.pathname,
        isAuthenticated: !!user,
      }
    }

    logout = event => {
      if (event.key === 'logout') {
        Router.push(`/?logout=${event.newValue}`)
      }
    }

    componentDidMount() {
      window.addEventListener('storage', this.logout, false)
    }

    componentWillUnmount() {
      window.removeEventListener('storage', this.logout, false)
    }

    render() {
      return (
        <div>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>Lorem Ipsum</title>
          </Head>
          <Page {...this.props} />
        </div>
      )
    }
  }
