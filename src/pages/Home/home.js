import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export class Home extends Component {
  render() {
    return (
      <div>
        <p>página Home</p>
        <Link to="/Sobre">Ir paga a página sobre</Link>
      </div>
    )
  }
}
