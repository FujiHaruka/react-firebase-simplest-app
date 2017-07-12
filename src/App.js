import React, { Component } from 'react'
import autoBind from 'react-autobind'
import MainPage from './MainPage'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    autoBind(this)
    this.state = {
      text: '',
      auth: false,
      user: null
    }
  }

  render () {
    let {
      text,
    } = this.state
    console.log(text)
    return (
      <div className='App'>
        <div className='App-header'>
          <h2 className='App-title'>React and Firebase Simplest App</h2>
        </div>
        <div className='App-main'>
          <MainPage
            handleInputChange={this.handleInputChange}
            inputValue={text}
          />
        </div>
      </div>
    )
  }

  async handleInputChange (e) {
    let text = e.target.value
    this.setState({ text })
  }
}

export default App
