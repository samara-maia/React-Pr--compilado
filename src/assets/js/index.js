import { Component } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'

import Botao from './botão'

class Sistema extends Component {
  render() {
    return (
      <div>
        <h1>Olá, Mundo!</h1>
        <Botao />
      </div>
    )
  }
}

ReactDOM.render(<Sistema />, document.getElementById('container'))
