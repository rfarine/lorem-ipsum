import React, { Component } from 'react'
import Router from 'next/router'

import { setToken } from '../../utils/auth'
import { parseHash } from '../../utils/auth0'

class SignedIn extends Component {
  componentDidMount() {
    parseHash((err, result) => {
      if (err) {
        console.error('Something happened with the Sign In request')
        return
      }

      setToken(result.idToken, result.accessToken)
      Router.push('/')
    })
  }

  render() {
    return null
  }
}

export default SignedIn
