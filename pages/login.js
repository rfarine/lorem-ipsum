import React, { Component } from 'react'
import { authorize } from '../utils/auth0'

class Login extends Component {
  componentDidMount() {
    authorize()
  }

  render() {
    return null
  }
}

export default Login
