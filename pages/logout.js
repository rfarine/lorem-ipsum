import React, { Component } from 'react'

import { unsetToken } from '../utils/auth'
import { logout } from '../utils/auth0'

class LogOut extends Component {
  componentDidMount() {
    unsetToken()
    logout()
  }

  render() {
    return null
  }
}

export default LogOut
