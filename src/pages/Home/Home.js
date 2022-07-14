import { tree } from 'gulp'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lista: [
        { nome: 'Bonieky', idade: 90 },
        { nome: 'Pedro', idade: 10 },
        { nome: 'Fulano', idade: 50 }
      ]
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(r => r.json())
      .then(json => {
        this.setState({ lista: json })
      })
  } //requisição

  render() {
    return (
      <div>
        <h3>Página Home...</h3>

        {this.state.lista.length == 0 && <i>Carregando...</i>}

        {this.state.lista.length > 0 && (
          <ul>
            {this.state.lista.map(item => {
              return (
                <li>
                  {item.nome} - {item.idade} anos
                </li>
              )
            })}
          </ul>
        )}

        <Link to="/sobre">Ir para página sobre</Link>
      </div>
    )
  }
}
