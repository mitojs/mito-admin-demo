import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Fallback extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>loading</div>
  }
}

export default withRouter(Fallback)
